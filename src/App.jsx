import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header, Footer, Main, Features, Stats } from "./Components";
import * as Component from "./Components";
import { Fade } from "react-awesome-reveal";
import customLinks from "../customize";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

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
      <section className="" id="faq">
        <Component.Faq />
      </section>
      <section id="team">
        <Component.Team />
      </section>
      <section id="know-more">
        <Component.Invite />
      </section>

      <Footer />
    </>
  );
}

export default App;
