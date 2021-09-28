import { DefaultTheme, css } from 'styled-components';

const fonts = {
  regular: css`
    font-size: 14px;
    font-weight: 400;
    font-family: 'Pretendard-Regular', sans-serif;
  `,
  bold: css`
    font-size: 14px;
    font-weight: bold;
    font-family: 'Pretendard-Regular', sans-serif;
  `,
};

const theme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
  },
  fonts,
};

export default theme;
