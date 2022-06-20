import "./App.css";
import { Header, Footer, Main, Features, Stats } from "./Components";
import * as Component from "./Components";
import customLinks from "../customize";
import "animate.css";

function App() {
  return (
    <>
      <Component.Header />
      <section id="maine">
        <Main />
      </section>
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

      <Footer />
    </>
  );
}

export default App;
