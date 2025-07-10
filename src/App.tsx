import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Features from "./components/Features";
import CreationProcess from "./components/CreationProcess";
import Numbers from "./components/Numbers";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto px-4 sm:px-6 mg:px-15 py-10">
        <Hero />
        <section id="About">
          <About />
        </section>
        <section id="Portfolio">
          <Portfolio />
        </section>
        <section id="Portfolio">
          <Features />
        </section>
        <section id="Portfolio">
          <CreationProcess />
        </section>
        <section id="Portfolio">
          <Numbers />
        </section>
      </div>
    </>
  );
}

export default App;
