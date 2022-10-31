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
import IssueListError from '../components/IssueListError';

export default function IssuesPage() {
  const { state, onGetIssuesWithInfiniteScroll, onGetIssues } =
    useContext(IssuesContext);
  const target = useRef();

  useEffect(() => {
    let io = null;
    if (target.current) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
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
        !state.isError && (
          <IssueList>
            {(state.data || []).map((issue, index) => (
              <li key={issue.number}>
                <IssueItem issue={issue} />
                {index === 3 && <Banner />}
              </li>
            ))}
          </IssueList>
        )
      )}

      {state.isError && <IssueListError onGetIssues={onGetIssues} />}

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
