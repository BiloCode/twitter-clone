import React from 'react';
import { RecoilRoot } from 'recoil';
import DefaultRouter from 'router';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <DefaultRouter />
    </RecoilRoot>
  );
}

export default App;
