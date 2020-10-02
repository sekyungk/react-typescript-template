import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global-style';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>App.tsx</div>
    </ThemeProvider>
  );
};

export default App;
