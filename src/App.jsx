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
      <section className="min-h-screen" id="features">
        <Features />
        <br></br>
        <br></br>
        <br></br>
        <Component.Stats />
        <br></br>
        <br></br>
        <br></br>
      </section>
      <section id="know-more">
        <Component.Invite />
      </section>
      <Footer />
    </>
  );
}

export default App;
