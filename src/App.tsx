import { useContext, useEffect } from "react";
import { ThemeContext } from "./provider/theme.provider";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Articles from "./components/Articles/Articles";
import GetIntouch from "./components/GetinTouch";
import Footer from "./components/Footer/Footer";
import Lenis from "lenis";

function App() {
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main
        className={`flex flex-col items-center justify-center ${
          dark ? "bg-black text-white" : "bg-[#F5F7F8] text-black"
        } w-full min-h-screen transition-colors duration-500`}
      >
        <Hero />
        <About />
        <Skills />
        <Work />
        <Articles />
        <GetIntouch />
        <Footer />
      </main>
    </>
  );
}

export default App;
