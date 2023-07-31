import { useState } from "react";
import "./App.css";
import Router from "../Router";
import Test from "./pages/Test";
import GlobalStyle from "../GlobalStyle";

function App() {
  return (
    <>
      {/* <Router /> */}
      <GlobalStyle />
      <Test />
    </>
  );
}

export default App;
