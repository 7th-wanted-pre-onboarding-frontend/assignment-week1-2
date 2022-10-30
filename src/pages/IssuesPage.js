import React, { useContext } from 'react';
import Container from '../ui/Container';
import Header from '../components/Header';
import IssueItem from '../components/IssueItem';
import { IssuesContext } from '../contexts/IssuesContext';

export default function IssuesPage() {
  const { state } = useContext(IssuesContext);

  return (
    <Container>
      <Header />
      {state.isLoading ? (
        <div>로딩 중</div>
      ) : (
        <>
          <ul
            style={{
              flex: 1
            }}
          >
            {(state.data || []).map((issue) => (
              <li key={issue.number}>
                <IssueItem issue={issue} />
              </li>
            ))}
          </ul>
          {/* <div ref={target}>불러오는 중입니다</div> */}
        </>
      )}
    </Container>
  );
}
