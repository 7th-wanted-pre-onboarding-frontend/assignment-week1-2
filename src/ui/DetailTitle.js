import styled from 'styled-components';

const DetailTitle = styled.article`
  font-size: 2rem;
  display: flex;
  align-items: flex-start;

  @media (max-width: 688px) {
    font-size: 1.5rem;
  }

  @media (max-width: 400px) {
    font-size: 1.3rem;
  }
`;

export default DetailTitle;
