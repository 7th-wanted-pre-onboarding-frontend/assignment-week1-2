import React, { useEffect, useState } from 'react';
import IssueService from '../utils/Issue.Service';
import Issue from '../utils/type/Issue';

export const IssuesContext = React.createContext(null);
let isFirstLoading = true;

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

    try {
      const { data } = await IssueService.getIssueList();
      const issues = data.map(
        ({
          user: { login: user, avatar_url: userImage },
          title,
          craeted_at: createdAt,
          number,
          comments,
          body
        }) =>
          new Issue(user, createdAt, number, title, comments, userImage, body)
      );

      console.log(issues);

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
