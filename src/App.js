import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skill from "./components/skills/Skill";
import Services from "./components/services/Services";

import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";

import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skill />
        <Qualification />
        <Work />
        <Services />

        {/* <Portfolio /> */}

        <Testimonial />
        <Contact />
        <Footer />
      </main>
      <ScrollUp />
    </>
  );
}

export default App;
