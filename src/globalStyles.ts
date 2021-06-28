import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

  * {
    padding : 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    overflow: hidden;
  }

  input , button {
    border : none;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  a {
    color: black;
    text-decoration: none;
  }

`;
