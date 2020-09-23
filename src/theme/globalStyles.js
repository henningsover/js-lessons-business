import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
  padding: 0;
}

main {
  height: 100vh;
  padding-top: 3em;
  background: #99ACB9;
}

`;

export default GlobalStyle;
