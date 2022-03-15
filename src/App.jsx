import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header, Footer, Main, Features, Stats } from "./Components";
import * as Component from "./Components";

function App() {
  return (
    <>
      <Component.Header />
      <Main />
      <Features />
      <br></br>
      <Footer />
    </>
  );
}

export default App;
