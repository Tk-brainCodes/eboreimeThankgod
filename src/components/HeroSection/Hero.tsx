import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Hero = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <Element
      name="home"
      className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden pt-20"
    >
      <div className="z-10 flex flex-col gap-6">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-[12vw] leading-[0.85] font-medium tracking-tighter ${
            dark ? "text-white" : "text-black"
          }`}
        >
          Creative
          <br />
          Developer
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-[90vw] mt-8"
        >
          <p
            className={`text-lg md:text-2xl max-w-xl leading-relaxed ${
              dark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Specializing in building visually stunning, robust accessible, and
            performant <span className="font-bold">web</span> and <span className="font-bold">mobile</span> experiences.
          </p>

          <div className="flex gap-8 mt-8 md:mt-0">
            {[
              { name: "Resume", link: "https://drive.google.com/file/d/1dEYa0ynrWga8hRoI7D5YLHw2TMEthwJV/view?usp=sharing" },
              { name: "GitHub", link: "https://github.com/Tk-brainCodes" },
              { name: "LinkedIn", link: "https://www.linkedin.com/in/eboreime-thankgod-34864a1b1/" },
              // { name: "Twitter", link: "https://www.twitter.com/tkworldclass" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm uppercase tracking-widest hover:underline underline-offset-4 ${
                  dark ? "text-white" : "text-black"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default Hero;
