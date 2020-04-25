import React from 'react';

import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import AppProvider from './hooks/';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  </>
);

export default App;
