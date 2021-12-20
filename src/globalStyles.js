import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`        
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }  
  
  body{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #FAFCFF;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }
  
  button {
    cursor: pointer;
    outline: none;
    border: none;
	  background-color: transparent;
	  padding: 0;
	  margin: 0;
  }
  
  input {
    outline: none;
    border: none;
  }
  
  li {
    list-style-type: none;
  }
`;
