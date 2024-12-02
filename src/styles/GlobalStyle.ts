import { createGlobalStyle } from 'styled-components';
import { reset } from '@/styles/reset';

const cdnUrl = import.meta.env.VITE_CDN_URL;

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body {
    ${({ theme }) => {
        return `
            body {
                font-family: ${theme.fonts.family.pretendard};
                font-weight: ${theme.fonts.weight.normal};
            }
        `;
    }}
  }

  @font-face {
    font-family: 'pretendard';
    font-style: normal;
    font-weight: normal;
    src: url('${cdnUrl}/font/pretendard_regular_subset.woff2') format('woff2');
  }

  @font-face {
    font-family: 'pretendard';
    font-style: normal;
    font-weight: bold;
    src: url('${cdnUrl}/font/pretendard_bold_subset.woff2') format('woff2');
  }
`;

export default GlobalStyle;
