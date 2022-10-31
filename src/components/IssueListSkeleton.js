import React from 'react';
import IssueItemSkeleton from '../ui/IssueItemSkeleton';
import IssueList from '../ui/IssueList';

export default function IssueListSkeleton() {
  return (
    <IssueList>
      <IssueItemSkeleton />
      <IssueItemSkeleton />
      <IssueItemSkeleton />
      <IssueItemSkeleton />
      <IssueItemSkeleton />
      <IssueItemSkeleton />
      <IssueItemSkeleton />
      <IssueItemSkeleton />
      <IssueItemSkeleton />
      <IssueItemSkeleton />
    </IssueList>
  );
}
