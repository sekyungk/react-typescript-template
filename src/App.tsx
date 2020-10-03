import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global-style';
import Router from './router';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default hot(App);
