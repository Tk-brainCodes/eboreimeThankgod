import { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ThemeContext } from "../../provider/theme.provider";
import "./About.css";
import Line from "../Line/Line";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

import { Element } from "react-scroll";

const About = () => {
  const { dark } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

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

  return (
    <Element
      name='about'
      className='About w-[100vw] px-[35px] py-[40px] h-auto'
    >
      <motion.div
        ref={ref}
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
      >
        <div className='' style={{ color: `${dark ? "#999" : "black"}` }}>
          <Line>About.</Line>
        </div>
        <div className='flex items-start justify-between mt-[2em] max-md:flex-col-reverse max-sm:flex-col-reverse h-fit'>
          <div className='title'>
            <div className='tech-stack max-md:-mt-[2em]'>
              <div
                className='stack-names'
                style={{ color: `${dark ? "#999" : "black"}` }}
              >
                <div className='star'>***</div> Tech Stack
              </div>
              <br />
              <div
                className='stacks leading-8'
                style={{ color: `${dark ? "#999" : "black"}` }}
              >
                RestAPI, ReactQuery <br />
                Typescript, Langchain, LLM (Large Language Models) React/Redux,{" "}
                <br /> Node.js, Express.js,
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
            className='w-[100vw] h-auto mb-[20px] text-white max-md:flex-col-reverse flex items-start  gap-[20px] max-sm:flex-wrap '
            style={{ color: `${dark ? "white" : "black"}` }}
          >
            <DirectionAwareHover>
              <p className='font-bold text-xl'>Eboreime ThankGod</p>
              <p className='font-normal text-sm'>Frontend Engineer</p>
            </DirectionAwareHover>
            <div className='text-2xl break-normal w-[40vw] max-md:w-[80vw] max-md:mb-[20px] max-md:mt-[20px]'>
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
