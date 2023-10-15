import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
a{
    text-decoration: none;
    color: inherit;
}
*{
    box-sizing: border-box;
}
html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
a, dl, dt, dd, ol, ul, li, form, label, table{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    font-weight:400;
    vertical-align: baseline;
}
body{
    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #fff;
    margin-bottom: 100px;
}
ol, ul{
    list-style: none;
}
button {
    border: 0;
    background: transparent;
    cursor: pointer;
}`;

export const theme = {
  primary: '#3371e3',
  warning: '#ff0000',
  background: {
    lightGray: '#efefef',
    white: '#fff',
  },
  font: {
    color: {
      white: '#fff',
      black: '#000',
    },
    size: {},
  },
  border: {
    color: {
      lightGray: '#efefef',
    },
  },
};
