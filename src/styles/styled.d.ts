import 'styled-components';
import { css } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {

    colors: {
      primary: string;
    };
    fonts: {
      regular: css;
      bold: css;
    };
  }
}
