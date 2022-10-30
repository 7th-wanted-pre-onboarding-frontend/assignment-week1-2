import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;

const Spinner = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: ${rotation} 1s linear infinite;
`;

export default Spinner;
