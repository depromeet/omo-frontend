import 'styled-components';
import { css } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mainBlue: css;
      pointYellow: css;
      pointRed: css;
      black900: css;
      black800: css;
      black700: css;
      black600: css;
      black500: css;
      black400: css;
      black300: css;
      black200: css;
      black100: css;
      white: css;
    };
    fonts: {
      header1: css;
      header2: css;
      header2_5: css;
      header3: css;
      header3_5: css;
      subTitle1: css;
      subTitle2: css;
      subTitle3: css;
      contents1: css;
      contents2: css;
      contents3: css;
      contentsBold: css;
    };
  }
}
