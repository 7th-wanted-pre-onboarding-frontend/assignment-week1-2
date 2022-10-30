import React from 'react';

import Container from '../ui/Container';

import {
  StyledComment,
  StyledCommentIcon,
  StyledCommentTitle,
  StyledGoHome,
  StyledTitle
} from '../ui/NotFoundPage';

export default function NotFoundPage() {
  return (
    <Container>
      <StyledTitle>
        <StyledCommentIcon>😭</StyledCommentIcon>
        <StyledCommentTitle>404</StyledCommentTitle>
        <StyledComment>Not Found</StyledComment>
        <StyledGoHome to='/'>Go Home</StyledGoHome>
      </StyledTitle>
    </Container>
  );
}
