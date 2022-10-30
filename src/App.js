import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import AppRouter from './Router';
import IssuesProvider from './contexts/IssuesContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <IssuesProvider>
        <AppRouter />
      </IssuesProvider>
    </>
  );
}

export default App;
