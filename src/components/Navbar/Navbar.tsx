import { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../provider/theme.provider";
import { Link } from "react-scroll";
import Toggle from "./Toggle";

const Navbar = () => {
  const [openSidenav, setOpenSidenav] = useState(false);
  const { dark, toggleTheme } = useContext(ThemeContext);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Articles", to: "articles" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      {/* Navbar wrapper for centering and spacing */}
      <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 pt-6">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`max-w-6xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center rounded-full transition-all duration-300 ${
            dark
              ? "bg-black/70 backdrop-blur-xl border border-white/10 shadow-lg shadow-white/5"
              : "bg-white/70 backdrop-blur-xl border border-black/5 shadow-lg shadow-black/10"
          }`}
        >
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer z-50"
        >
          <div className="flex flex-col">
            <h1
              className={`text-lg md:text-xl font-semibold tracking-tight ${
                dark ? "text-white" : "text-black"
              }`}
            >
              Eboreime ThankGod
            </h1>
            <span
              className={`text-[10px] md:text-xs uppercase tracking-wider opacity-50 ${
                dark ? "text-white" : "text-black"
              }`}
            >
              Software Developer
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer"
            >
              <li
                className={`text-sm uppercase tracking-widest hover:opacity-60 transition-opacity ${
                  dark ? "text-white" : "text-black"
                }`}
              >
                {link.name}
              </li>
            </Link>
          ))}
          <div className="ml-4">
            <Toggle dark={dark} toggleTheme={toggleTheme} />
          </div>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpenSidenav(!openSidenav)}
          className="md:hidden z-50 focus:outline-none"
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${dark ? "bg-white" : "bg-black"} ${openSidenav ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${dark ? "bg-white" : "bg-black"} ${openSidenav ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 transition-all ${dark ? "bg-white" : "bg-black"} ${openSidenav ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </motion.nav>
      </div>

      {/* Mobile Sidenav */}
      <AnimatePresence>
        {openSidenav && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 right-0 w-full md:w-[400px] h-screen z-40 flex flex-col justify-center items-center gap-8 ${
              dark ? "bg-black" : "bg-[#F5F7F8]"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setOpenSidenav(false)}
                className="cursor-pointer"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`text-4xl font-medium tracking-tight hover:opacity-60 transition-opacity ${
                    dark ? "text-white" : "text-black"
                  }`}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
            <div className="mt-8">
              <Toggle dark={dark} toggleTheme={toggleTheme} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
