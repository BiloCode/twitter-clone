import React from 'react';
import { RecoilRoot } from 'recoil';
import Home from './containers/home';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Home />
    </RecoilRoot>
  );
}

export default App;
