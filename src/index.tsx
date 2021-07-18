import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import reportWebVitals from './reportWebVitals';
import { DataProvider } from './context';

import App from './App';

import { theme } from './appStyled/theme';
import { Normolize } from  "./appStyled/normolize"


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Normolize/>
    <React.StrictMode>
      <DataProvider>
        <App />
      </DataProvider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
