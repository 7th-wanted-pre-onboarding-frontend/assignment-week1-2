import React from 'react';
import { Link } from 'react-router-dom';
import IssueContentsContainer from '../ui/IssueContentsContainer';
import IssueItemDiv from '../ui/IssueItemDiv';
import IssueItemContainer from '../ui/IssueItemContainer';

export default function IssueItem({ issue }) {
  const { number, title, user, createdAt, comments } = issue;

  return (
    <Link to={`/issue/${number}`}>
      <IssueItemContainer>
        <IssueContentsContainer>
          <IssueItemDiv fontSize='20' fontColor='black'>
            <div>{number}</div>
            <div>{title}</div>
          </IssueItemDiv>
          <IssueItemDiv fontSize='16' fontColor='gray' whiteSpace='nowrap'>
            {`작성자: ${user}, 작성일: ${createdAt}`}
          </IssueItemDiv>
        </IssueContentsContainer>
        <IssueItemDiv
          fontSize='16'
          fontColor='gray'
        >{`코멘트: ${comments}`}</IssueItemDiv>
      </IssueItemContainer>
    </Link>
  );
}
