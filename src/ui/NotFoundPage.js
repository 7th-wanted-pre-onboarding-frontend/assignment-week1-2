import styled from 'styled-components';

import { Link } from 'react-router-dom';

const StyledTitle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 5rem;

  p {
    text-align: center;
  }
`;

const StyledCommentTitle = styled.span`
  width: 100%;
  text-align: center;
  line-height: 7rem;
  color: ${(props) => props.theme.accentColor};
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  transform: translateY(-50px);
  opacity: 0;
  animation-name: titleAnimation;
  animation-timing-function: ease;
  animation-duration: 5s;
  animation-delay: 0.6s;
  animation-iteration-count: infinite;

  &:first-child {
    animation-delay: 0.7s;
  }

  &:last-child {
    animation-delay: 0.5s;
  }

  @keyframes titleAnimation {
    0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    }
    20% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
    80% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
    100% {
      transform: translateY(50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
      clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    }
  }
`;

const StyledComment = styled(StyledCommentTitle)`
  font-weight: 500;
  font-size: 3rem;
`;

const StyledCommentIcon = styled(StyledCommentTitle)`
  font-size: 5.5rem;
`;

const StyledGoHome = styled(Link)`
  border: 1px solid #30336b;
  border-radius: 5px;
  background-color: #30336b;
  padding: 10px;
  font-size: 2.2rem;
  color: whitesmoke;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in;

  &:hover {
    border: 1px solid #30239b;
    background-color: #30239b;
  }

  &:visited {
    text-decoration: none;
    color: whitesmoke;
  }
`;

export {
  StyledComment,
  StyledCommentIcon,
  StyledCommentTitle,
  StyledGoHome,
  StyledTitle
};
