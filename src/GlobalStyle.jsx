import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  html {
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
  } */
  
  html, body, #root {
      height: 100vh; /* 혹시나 Custom Property 지원 안하는 브라우저를 위한 복귀점(Fallback) */
      height: calc(var(--vh, 1vh) * 100);
      width: 100%;
      background-color: ${(props) => props.theme.colors.lightGray};
      ${(props) => props.theme.flex.flexCenter}
  }

  #root {
    position : fixed;
	  overflow : hidden;
  }
  

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1Pretendard-Bold.woff') format('woff');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
  }
  
  * {
    font-family: 'Pretendard';
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
