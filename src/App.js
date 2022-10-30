import React, { useMemo, useReducer } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import AppRouter from './Router';
import IssuesContext, {
  issueListState,
  reducer
} from './contexts/IssuesContext';

function App() {
  const [state, dispatch] = useReducer(reducer, issueListState);
  const value = useMemo(
    () => ({
      state,
      dispatch
    }),
    [state, dispatch]
  );

  return (
    <>
      <GlobalStyle />
      <IssuesContext.Provider value={value}>
        <AppRouter />
      </IssuesContext.Provider>
    </>
  );
}

export default App;
