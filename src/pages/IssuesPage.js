import React, { useContext } from 'react';
import Container from '../ui/Container';
import Header from '../components/Header';
import IssueItem from '../components/IssueItem';
import { IssuesContext } from '../contexts/IssuesContext';
import IssueList from '../ui/IssueList';
import IssueItemSkeleton from '../ui/IssueItemSkeleton';

export default function IssuesPage() {
  const { state } = useContext(IssuesContext);

  return (
    <Container>
      <Header />
      {state.isLoading ? (
        <IssueList>
          <IssueItemSkeleton />
          <IssueItemSkeleton />
          <IssueItemSkeleton />
          <IssueItemSkeleton />
          <IssueItemSkeleton />
          <IssueItemSkeleton />
          <IssueItemSkeleton />
          <IssueItemSkeleton />
          <IssueItemSkeleton />
          <IssueItemSkeleton />
        </IssueList>
      ) : (
        <>
          <IssueList>
            {(state.data || []).map((issue) => (
              <li key={issue.number}>
                <IssueItem issue={issue} />
              </li>
            ))}
          </IssueList>
        </>
      )}
      {/* <div ref={target}>불러오는 중입니다</div> */}
    </Container>
  );
}
