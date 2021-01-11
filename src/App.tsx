import React from 'react';
import { GlobalStyle } from './globalStyles';
import "./store/init";

import DefaultRouter from 'router';
import FloatContent from 'shared/components/layouts/FloatContent';

function App() {
  return (
    <>
      <GlobalStyle />
      <DefaultRouter />
      <FloatContent />
    </>
  );
}

export default App;
