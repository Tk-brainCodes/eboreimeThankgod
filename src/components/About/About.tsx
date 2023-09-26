import { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../provider/theme.provider";
import "./About.css";
import Line from "../Line/Line";

import { Element } from "react-scroll";

const About = () => {
  const { dark } = useContext(ThemeContext);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <Element name='about' className='About w-[100vw] h-auto'>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={cardVariants}
      >
        <div
          className='title-name'
          style={{ color: `${dark ? "#999" : "black"}` }}
        >
          <Line>About.</Line>
        </div>
        <div className='about-container h-fit'>
          <div className='title'>
            <div className='tech-stack'>
              <div
                className='stack-names'
                style={{ color: `${dark ? "#999" : "black"}` }}
              >
                <div className='star'>***</div> Tech Stack
              </div>
              <br />
              <div
                className='stacks'
                style={{ color: `${dark ? "#999" : "black"}` }}
              >
                RestAPI, ReactQuery <br />
                Typescript, React/Redux, <br /> Node.js, Express.js,
                <br />
                Next.js (13+), Git, <br />
                Github, Tailwind CSS
                <br />
                HTML5, CSS3/SCSS,
                <br /> Javascript (es6)
              </div>
            </div>
          </div>

          <div
            className='description w-[100vw] h-auto mb-[20px] text-white flex items-center justify-around gap-[30px] max-sm:flex-wrap'
            style={{ color: `${dark ? "white" : "black"}` }}
          >
            <div className='my-image w-[80vw] h-[500px] lg:w-[300px] lg:h-[340px] ' />
            <div className='about-section-text w-full lg:w-[40vw] lg:px-2 lg:py-2'>
              I am a front end engineer who's passionate about working closely
              with both engineers and designers to create exceptional products
              that meet specific needs. With a profound curiosity and passion
              for continuous learning, I embrace emerging technologies and seek
              challenges in the front-end landscape.
            </div>
          </div>
        </div>
      </motion.div>
    </Element>
  );
};
export default About;
