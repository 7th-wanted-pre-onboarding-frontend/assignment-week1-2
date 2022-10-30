import React from 'react';
import IssueContentsContainer from '../ui/IssueContentsContainer';
import IssueItemDiv from '../ui/IssueItemDiv';
import IssuseItemContainer from '../ui/IssueItemContainer';

export default function IssueItem({ oneIssue }) {
  const { number, title, user, created_at, comments } = oneIssue;

  const goToDetail = () => {};
  return (
    <IssuseItemContainer onClick={goToDetail}>
      <IssueContentsContainer>
        <IssueItemDiv fontSize='20' fontColor='black'>
          <div>{number}</div>
          <div>{title}</div>
        </IssueItemDiv>
        <IssueItemDiv fontSize='16' fontColor='gray'>
          <div>{`작성자: ${user.login}, 작성일: ${created_at}`}</div>
          /docs/rules/camelcase
        </IssueItemDiv>
      </IssueContentsContainer>
      <IssueItemDiv
        fontSize='16'
        fontColor='gray'
      >{`코멘트: ${comments}`}</IssueItemDiv>
    </IssuseItemContainer>
  );
}

// oneIssue.number,
// oneIssue.title,
// oneIssue.user.login,
// oneIssue.created_at.substr(0, 10),
// oneIssue.comments
