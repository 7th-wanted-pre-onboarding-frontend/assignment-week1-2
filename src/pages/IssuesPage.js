import React, { useEffect, useState } from 'react';
import Container from '../ui/Container';
import Header from '../components/Header';
import client from '../utils/CustomAxios';
import IsuuseItem from '../components/IsuuseItem';

export default function IssuesPage() {
  const [issueList, setIssueList] = useState([]);
  useEffect(() => {
    const getIssue = async () => {
      const { data } = await client.get(
        '/repos/angular/angular-cli/issues?sort=comments&per_page=1'
      );
      setIssueList(data);
    };
    getIssue();
  }, []);

  return (
    <Container>
      <Header />
      {issueList?.map((oneIssue) => (
        <IsuuseItem key={oneIssue.id} oneIssue={oneIssue} />
      ))}
    </Container>
  );
}
