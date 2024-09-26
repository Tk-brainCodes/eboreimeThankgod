import { useContext } from "react";
import { ThemeContext } from "./provider/theme.provider";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Articles from "./components/Articles/Articles";
import GetIntouch from "./components/GetinTouch";
import Footer from "./components/Footer/Footer";

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <main
        className={`flex flex-col items-center justify-center ${
          dark ? "bg-black" : "bg-[#F5F7F8]"
        } w-[100vw]`}
      >
        <Hero />
        <About />
        <Work />
        <Articles />
        <GetIntouch />
        <Footer />
      </main>
    </>
  );
}

export default App;
