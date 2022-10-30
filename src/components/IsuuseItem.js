import React from 'react';
import IssueContentsContainer from '../ui/IssueContentsContainer';
import IsseItemDiv from '../ui/IssueItemTitleDiv';
import IsuuseItemContainer from '../ui/IsuuseItemContainer';

export default function IsuuseItem({ oneIssue }) {
  // eslint-disable-next-line camelcase
  const { number, title, user, created_at, comments } = oneIssue;

  const goToDetail = () => console.log(1);
  return (
    <IsuuseItemContainer onClick={goToDetail}>
      <IssueContentsContainer>
        <IsseItemDiv fontSize='20' fontColor='black'>
          <div>{number}</div>
          <div>{title}</div>
        </IsseItemDiv>
        <IsseItemDiv fontSize='16' fontColor='gray'>
          <div>
            {/* eslint-disable-next-line camelcase */}
            {`작성자: ${user.login}, 작성일: ${created_at}`}
          </div>
        </IsseItemDiv>
      </IssueContentsContainer>
      <IsseItemDiv
        fontSize='16'
        fontColor='gray'
      >{`코멘트: ${comments}`}</IsseItemDiv>
    </IsuuseItemContainer>
  );
}

// oneIssue.number,
// oneIssue.title,
// oneIssue.user.login,
// oneIssue.created_at.substr(0, 10),
// oneIssue.comments
