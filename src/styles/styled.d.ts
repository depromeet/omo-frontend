import 'styled-components';
import { css } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mainBlue: string;
      pointYellow: string;
      pointRed: string;
      black900: string;
      black800: string;
      black700: string;
      black600: string;
      black500: string;
      black400: string;
      black300: string;
      black200: string;
      black100: string;
      white: string;
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
