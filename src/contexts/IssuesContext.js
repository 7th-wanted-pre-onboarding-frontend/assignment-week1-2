import React, { useEffect, useState } from 'react';
import issueDateFormat from '../utils/date';
import IssueService from '../utils/Issue.Service';
import Issue from '../utils/type/Issue';

export const IssuesContext = React.createContext(null);
let isFirstLoading = true;
let timer = null;

function IssuesProvider({ children }) {
  const [state, setState] = useState({
    isLoading: true,
    isInfiniteLoading: false,
    isError: false,
    data: null,
    error: null
  });

  const onGetIssues = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      isInfiniteLoading: false,
      isError: false,
      error: null
    }));

    clearTimeout(timer);
    timer = setTimeout(async () => {
      try {
        const { data } = await IssueService.getIssueList();
        const issues = data.map(
          ({
            user: { login: user, avatar_url: userImage },
            title,
            created_at: createdAt,
            number,
            comments,
            body
          }) =>
            new Issue(
              user,
              issueDateFormat(createdAt),
              number,
              title,
              comments,
              userImage,
              body
            )
        );

        setState((prev) => ({
          ...prev,
          isLoading: false,
          isInfiniteLoading: false,
          isError: false,
          data: [...(prev.data || []), ...issues],
          error: null
        }));
      } catch (err) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          isInfiniteLoading: false,
          isError: true,
          error: err.message || '이슈를 가져오는데에 실패하였습니다.'
        }));
      }
    }, 500);
  };

  useEffect(() => {
    if (isFirstLoading) {
      onGetIssues();
      isFirstLoading = false;
    }
  }, []);

  return (
    <IssuesContext.Provider value={{ state, onGetIssues }}>
      {children}
    </IssuesContext.Provider>
  );
}

export default IssuesProvider;
