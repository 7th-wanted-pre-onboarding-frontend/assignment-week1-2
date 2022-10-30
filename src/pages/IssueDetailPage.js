import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ui from '../ui';
import Container from '../ui/Container';
import IssueService from '../utils/Issue.Service';
import Issue from '../utils/type/Issue';
import IssueDetail from '../components/IssueDetail';

export default function IssueDetailPage() {
  const { issueId } = useParams();
  const [isError, setIsError] = useState(false);
  const [issueItemContent, setIssueItemContent] = useState({});

  const isLoading = JSON.stringify(issueItemContent) === '{}' && true;

  const getIssueItem = async () => {
    setIsError(false);

    try {
      const { data } = await IssueService.getIssue(issueId);
      if (data) {
        const issueItem = new Issue(
          data.user.login,
          data.created_at,
          data.number,
          data.title,
          data.comments,
          data.user.avatar_url,
          data.body
        );
        setIssueItemContent(issueItem);
      }
    } catch (error) {
      setIsError(error);
    }
  };

  useEffect(() => {
    getIssueItem();
  }, []);

  return (
    <Container>
      <Header />
      {!isError && !isLoading && (
        <ui.DetailWrapper>
          <ui.DetailTitle>
            <ui.AuthorImage
              alt='author_image'
              src={issueItemContent.userImage}
            />
            #{issueItemContent.number} {issueItemContent.title}
          </ui.DetailTitle>
          <ui.DetailContent>
            작성자: {issueItemContent.user}, 작성일:
            {issueItemContent.createdAt.substring(0, 10)}, 코멘트:
            {issueItemContent.comments}
          </ui.DetailContent>
          <hr />
          <IssueDetail>{issueItemContent.contents}</IssueDetail>
        </ui.DetailWrapper>
      )}
      {!isError && isLoading && <>Skeleton</>}
      {isError && <>display Error Page</>}
    </Container>
  );
}
