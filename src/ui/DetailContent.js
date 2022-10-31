import styled from 'styled-components';

const DetailContent = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 10px 0 0px 0;
  color: #999;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default DetailContent;
