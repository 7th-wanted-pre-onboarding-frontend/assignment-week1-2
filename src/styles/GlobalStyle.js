import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Do Hyeon', sans-serif;
  }
  a {
    text-decoration: none;
  }

  .skeleton {
    background-color: #e0e3e3;
    position: relative;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.2) 20%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0)
      );
      transform: translateX(-100%);
      animation: shimmer 2s infinite;
    }
    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  }
`;

export default GlobalStyle;
