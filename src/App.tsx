import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Features from "./components/Features";
import CreationProcess from "./components/CreationProcess";
import Numbers from "./components/Numbers";
import Services from "./components/Services";
import GameEvents from "./components/GameEvents";
import Reviews from "./components/Reviews";
import Awards from "./components/Awards";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        <section id="Features">
          <Features />
        </section>
        <section id="Games">
          <CreationProcess />
        </section>
        <section id="Numbers">
          <Numbers />
        </section>
        <section id="Services">
          <Services />
        </section>
        <section id="Events">
          <GameEvents />
        </section>
        <section id="Reviews">
          <Reviews />
        </section>
        <section id="Awards">
          <Awards />
        </section>
        <section id="Blog">
          <Blog />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default App;
