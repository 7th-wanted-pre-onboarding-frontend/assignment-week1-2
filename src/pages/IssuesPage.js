import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '../ui/Container';
import Header from '../components/Header';
import IssueItem from '../components/IssuseItem';

export default function IssuesPage() {
  const [issueList, setIssueList] = useState([]);

  const [target, setTarget] = useState('');
  const [isLoding, setIsLoading] = useState(false);

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoding) {
      observer.unobserve(entry.target);
      setIsLoading(true);
      await axios(
        'https://api.github.com/repos/angular/angular-cli/issues?sort=comments&page=1&per_page=12',
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            'Content-Type': 'application/vnd.github+json'
          }
        }
      ).then(({ data }) => {
        console.log(data);
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
    axios(
      'https://api.github.com/repos/angular/angular-cli/issues?sort=comments&page=1&per_page=12',
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          'Content-Type': 'application/vnd.github+json'
        }
      }
    ).then(({ data }) => {
      setIssueList(data);
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
