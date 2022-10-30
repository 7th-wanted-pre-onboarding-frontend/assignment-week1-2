import React from 'react';
import Container from '../ui/Container';
import Header from '../components/Header';
import useGetissues from '../utils/hooks/useGetIssues';

export default function IssuesPage() {
  const state = useGetissues();
  console.log(state);
  return (
    <Container>
      <Header />
      IssuesPage
    </Container>
  );
}
