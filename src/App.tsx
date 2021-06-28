import { GlobalStyle } from "./globalStyles";
import "@store/init";

import DefaultRouter from "@router";
import FloatContent from "@templates/FloatContent";

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
