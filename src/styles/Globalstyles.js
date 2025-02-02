import { createGlobalStyle } from "styled-components";
// import bgImg from "../../public/weather-background.jpg"
const GlobalStyles = createGlobalStyle`
  *{
   box-sizing:border-box;
  }
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
    background:#fff;
  }
`;

export default GlobalStyles;
