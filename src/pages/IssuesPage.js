import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Container from '../ui/Container';
import Header from '../components/Header';
import IssueItem from '../components/IssuseItem';

export default function IssuesPage() {
  const [issueList, setIssueList] = useState([]);
  const [toggle, setToggle] = useState(false);

  const viewport = useRef(null);
  const target = useRef(null);
  const loadItem = () => {
    setToggle((prev) => !prev);
    axios
      .get(
        'https://api.github.com/repos/angular/angular-cli/issues?sort=comments&page=11&per_page=2',
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            'Content-Type': 'application/vnd.github+json'
          }
        }
      )
      .then(({ data }) => {
        setIssueList((prev) => [...prev, ...data]);
        setToggle((prev) => !prev);
      });
  };

  useEffect(() => {
    const option = {
      root: viewport.current,
      rootMargin: '0px',
      threshold: 0
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        if (toggle) loadItem();
        observer.unobserve(entry.target);
        observer.observe(target.current);
      });
    };

    const io = new IntersectionObserver(handleIntersection, option);

    if (target.current) io.observe(target.current);

    return () => io && io.disconnect();
  }, [viewport, target, toggle]);

  useEffect(() => {
    axios(
      'https://api.github.com/repos/angular/angular-cli/issues?sort=comments&page=1&per_page=10'
    ).then(({ data }) => {
      setIssueList(data);
      setToggle((prev) => !prev);
    });
  }, []);

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
