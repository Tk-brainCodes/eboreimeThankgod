import { useContext, useEffect, lazy, Suspense } from "react";
import { ThemeContext } from "./provider/theme.provider";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Lenis from "lenis";

const Skills = lazy(() => import("./components/Skills/Skills"));
const Work = lazy(() => import("./components/Work/Work"));
const Articles = lazy(() => import("./components/Articles/Articles"));
const GetIntouch = lazy(() => import("./components/GetinTouch"));

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
        <Suspense fallback={<div className="w-full min-h-[400px]" />}>
          <Skills />
          <Work />
          <Articles />
          <GetIntouch />
        </Suspense>
        <Footer />
      </main>
    </>
  );
}

export default App;
