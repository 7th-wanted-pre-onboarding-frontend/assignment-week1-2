import styled from 'styled-components';

const DetailWrapper = styled.article`
  h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  blockquote {
    padding: 0 15px;
    margin: 10px 0;
    border-left: 0.25em solid;
    border-color: #f0f0f0;
  }
  code {
    font-size: 12px;
  }
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
`;

export default DetailWrapper;
