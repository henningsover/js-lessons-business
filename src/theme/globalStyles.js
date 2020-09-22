import { createGlobalStyle } from "styled-components";

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
  margin-top: 3em;
}

`;

export default GlobalStyle;
