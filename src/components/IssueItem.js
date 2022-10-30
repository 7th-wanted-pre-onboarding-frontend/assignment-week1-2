import React from 'react';
import { Link } from 'react-router-dom';
import IssueContentsContainer from '../ui/IssueContentsContainer';
import IssueItemDiv from '../ui/IssueItemDiv';
import IssuseItemContainer from '../ui/IssueItemContainer';

export default function IssueItem({ issue }) {
  const { number, title, user, createdAt, comments } = issue;

  return (
    <Link to={`/issue/${number}`}>
      <IssuseItemContainer>
        <IssueContentsContainer>
          <IssueItemDiv fontSize='20' fontColor='black'>
            <div>{number}</div>
            <div>{title}</div>
          </IssueItemDiv>
          <IssueItemDiv fontSize='16' fontColor='gray'>
            <div>{`작성자: ${user}, 작성일: ${createdAt}`}</div>
          </IssueItemDiv>
        </IssueContentsContainer>
        <IssueItemDiv
          fontSize='16'
          fontColor='gray'
        >{`코멘트: ${comments}`}</IssueItemDiv>
      </IssuseItemContainer>
    </Link>
  );
}
