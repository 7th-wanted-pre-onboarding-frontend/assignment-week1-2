import React, { useContext, useEffect, useRef } from 'react';
import Container from '../ui/Container';
import Header from '../components/Header';
import IssueItem from '../components/IssueItem';
import { IssuesContext } from '../contexts/IssuesContext';
import IssueList from '../ui/IssueList';
import IssueItemSkeleton from '../ui/IssueItemSkeleton';
import Spinner from '../ui/Spinner';
import SpinnerWrapper from '../ui/SpinnerWapper';

export default function IssuesPage() {
  const { state, onGetIssuesWithInfiniteScroll } = useContext(IssuesContext);
  const target = useRef();

  useEffect(() => {
    let io = null;
    if (target.current) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // 가시성의 변화가 있으면 관찰 대상 전체에 대한 콜백이 실행되므로,
          // 관찰 대상의 교차 상태가 false일(보이지 않는) 경우 실행하지 않음.
          if (!entry.isIntersecting) {
            return;
          }

          onGetIssuesWithInfiniteScroll();
        });
      });
      io.observe(target.current);
    }

    return () => io && io.disconnect();
  }, [target.current]);

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
      {state.isInfiniteLoading && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
      <section
        ref={target}
        style={{
          height: '10px'
        }}
      />
    </Container>
  );
}
