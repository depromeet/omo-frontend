import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  .container {
    padding: 0 21px;
  }
`;

export default GlobalStyle;
