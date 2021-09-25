import 'styled-components';
import { css } from 'styled-components';

declare module 'styled-components' {
  export interface DefulatTheme {
    colors: {
      primary: string;
    };
    fonts: {
      regular: css;
      bold: css;
    };
  }
}
