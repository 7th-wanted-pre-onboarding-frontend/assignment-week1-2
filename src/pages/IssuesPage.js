import React, { useContext, useEffect, useRef } from 'react';
import Container from '../ui/Container';
import Header from '../components/Header';
import IssueItem from '../components/IssueItem';
import { IssuesContext } from '../contexts/IssuesContext';
import IssueList from '../ui/IssueList';
import Spinner from '../ui/Spinner';
import SpinnerWrapper from '../ui/SpinnerWapper';
import InfiniteErrorWrapper from '../ui/InfiniteErrorWrapper';
import ErrorMessage from '../ui/ErrorMessage';
import IssueListSkeleton from '../components/IssueListSkeleton';
import InfiniteDivider from '../components/InfiniteDivider';
import Banner from '../components/Banner';

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
        <IssueListSkeleton />
      ) : (
        <IssueList>
          {(state.data || []).map((issue, index) => (
            <li key={issue.number}>
              <IssueItem issue={issue} />
              {index === 3 && <Banner />}
            </li>
          ))}
        </IssueList>
      )}
      {state.isInfiniteLoading && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}

      {state.isInfiniteError && (
        <InfiniteErrorWrapper>
          <ErrorMessage>{state.error}</ErrorMessage>
        </InfiniteErrorWrapper>
      )}

      <InfiniteDivider ref={target} />
    </Container>
  );
}
