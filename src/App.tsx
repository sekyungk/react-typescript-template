import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>App.tsx</div>
    </ThemeProvider>
  );
};

export default App;
