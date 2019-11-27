import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
   -webkit-font-smoothing: antialiased;
   /* background: linear-gradient(160deg, #ccc, #fff); */
  }

  body, input,button {
    font: 14px 'Roboto', sans-serif; 
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
