import React, { useEffect, useRef, useState } from 'react';
import issueDateFormat from '../utils/date';
import IssueService from '../utils/Issue.Service';
import Issue from '../utils/type/Issue';

export const IssuesContext = React.createContext(null);
let isFirstLoading = true;
let timer = null;
let infiniteTimer = null;
let isEnded = false;

function IssuesProvider({ children }) {
  const [state, setState] = useState({
    isLoading: true,
    isInfiniteLoading: false,
    isError: false,
    isInfiniteError: false,
    data: null,
    error: null
  });
  const page = useRef(0);
  const areEndedIssues = (data) => !data.length;

  const onGetIssuesWithInfiniteScroll = () => {
    if (isEnded) {
      return;
    }

    setState((prev) => ({
      ...prev,
      isLoading: false,
      isInfiniteLoading: true,
      isInfiniteError: false,
      isError: false,
      error: null
    }));

    if (!state.isInfiniteLoading) {
      clearTimeout(infiniteTimer);
      infiniteTimer = setTimeout(async () => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          isInfiniteLoading: false,
          isInfiniteError: false,
          isError: false,
          error: null
        }));
        page.current += 1;
        try {
          const { data } = await IssueService.getIssueList(page.current);

          if (areEndedIssues(data)) {
            setState((prev) => ({
              ...prev,
              isLoading: false,
              isInfiniteLoading: false,
              isInfiniteError: false,
              isError: false,
              error: null
            }));
            isEnded = true;
            return;
          }

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
            isInfiniteError: false,
            isError: false,
            data: [...(prev.data || []), ...issues],
            error: null
          }));
        } catch (err) {
          page.current = page.current === 1 ? 1 : page.current - 1;
          setState((prev) => ({
            ...prev,
            isLoading: false,
            isInfiniteLoading: false,
            isInfiniteError: true,
            isError: false,
            error: err.message || '이슈를 가져오는데에 실패하였습니다.'
          }));
        }
      }, 500);
    }
  };

  const onGetIssues = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      isInfiniteLoading: false,
      isInfiniteError: false,
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
          isInfiniteError: false,
          isError: false,
          data: [...(prev.data || []), ...issues],
          error: null
        }));
      } catch (err) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          isInfiniteLoading: false,
          isInfiniteError: false,
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
    <IssuesContext.Provider
      value={{ state, onGetIssues, onGetIssuesWithInfiniteScroll }}
    >
      {children}
    </IssuesContext.Provider>
  );
}

export default IssuesProvider;
