import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import Header from '../components/Header';
import IssueItem from '../components/IssuseItem';
import IssueService from '../utils/Issue.Service';

export default function IssuesPage() {
  const [issueList, setIssueList] = useState([]);

  const [target, setTarget] = useState('');
  const [isLoding, setIsLoading] = useState(false);
  const pageOffset = useRef(1);

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoding) {
      observer.unobserve(entry.target);
      setIsLoading(true);
      await IssueService.getIssueList(pageOffset.current).then(({ data }) => {
        setIssueList((prev) => [...prev, ...data]);
        pageOffset.current += 4;
      });
      setIsLoading(false);
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  useEffect(() => {
    IssueService.getIssueList(pageOffset.current).then(({ data }) => {
      setIssueList(data);
      pageOffset.current += 4;
    });
  }, []);

  return (
    <Container>
      <Header />
      <div style={{ flex: 1, background: 'orange' }}>
        {issueList?.map((oneIssue) => (
          <IssueItem key={oneIssue.id} oneIssue={oneIssue} />
        ))}
      </div>
      <div ref={setTarget}>불러오는 중입니다</div>
    </Container>
  );
}
