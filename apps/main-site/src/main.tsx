import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './app/app';

const GlobalStyle = createGlobalStyle`
  :root { font-family: 'Inter', sans-serif; }

  @supports (font-variation-settings: normal) {
    :root { font-family: 'Inter var', sans-serif; }
  }

  body {
    margin: 0px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
