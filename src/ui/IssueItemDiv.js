import styled from 'styled-components';

const IssueItemDiv = styled.div`
  display: flex;
  gap: 16px;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ fontColor }) => fontColor};
`;

export default IssueItemDiv;
