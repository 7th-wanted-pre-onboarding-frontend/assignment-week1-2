import { useContext, useEffect } from 'react';
import IssuesContext from '../../contexts/IssuesContext';
import IssueService from '../Issue.Service';
import Issue from '../type/Issue';

export default function useGetissues() {
  const { state, dispatch } = useContext(IssuesContext);

  useEffect(() => {
    async function getIssues() {
      dispatch({ type: 'LOADING', data: null });

      try {
        const { data } = await IssueService.getIssueList();
        const issues = data.map(
          (issue) =>
            new Issue(
              issue.user.login,
              issue.created_at,
              issue.number,
              issue.title,
              issue.comments,
              issue.user.avatar_url,
              issue.body
            )
        );
        dispatch({ type: 'SUCCESS', data: issues });
      } catch (err) {
        dispatch({
          type: 'ERROR',
          data: err.message || '이슈를 가져오는데 실패하였습니다.'
        });
      }
    }

    getIssues();
  }, []);

  return state;
}
