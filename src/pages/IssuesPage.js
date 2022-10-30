import React, { useEffect, useState, useRef } from 'react';
import Container from '../ui/Container';
import Header from '../components/Header';
import client from '../utils/CustomAxios';
import IssueItem from '../components/IssuseItem';

export default function IssuesPage() {
  const [issueList, setIssueList] = useState([]);
  const [addListToggle, setAddListToggle] = useState(false);

  const viewport = useRef(null);
  const target = useRef(null);

  const loadItems = async () => {
    setAddListToggle((prev) => !prev);
    await client
      .get('/repos/angular/angular-cli/issues?sort=comments&page=11&per_page=5')
      .then(({ data }) => {
        setIssueList((prev) => [...prev, ...data]);
        setAddListToggle((prev) => !prev);
      });
  };

  useEffect(() => {
    const getIssue = async () => {
      await client
        .get(
          '/repos/angular/angular-cli/issues?sort=comments&page=1&per_page=12'
        )
        .then(({ data }) => {
          setIssueList(data);
          setAddListToggle((prev) => !prev);
        });
    };
    getIssue();
  }, []);

  useEffect(() => {
    const options = {
      root: viewport.current,
      threshold: 0
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(async (entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        await loadItems();
        observer.unobserve(entry.target);
        observer.observe(target.current);
      });
    };

    const io = new IntersectionObserver(handleIntersection, options);

    if (target.current) {
      io.observe(viewport.current);
    }
    return () => io && io.disconnect();
  }, [viewport, target, addListToggle]);

  return (
    <Container ref={viewport}>
      <Header />
      {issueList?.map((oneIssue) => (
        <IssueItem key={oneIssue.id} oneIssue={oneIssue} />
      ))}
      <div ref={target}>불러오는 중입니다</div>
    </Container>
  );
}
