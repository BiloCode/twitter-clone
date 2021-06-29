import DefaultRouter from "@router";
import GlobalStore from "@store/init";

import FloatContent from "@templates/FloatContent";

import { GlobalStyle } from "globalStyles";

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
