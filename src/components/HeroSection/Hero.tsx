import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import "./HeroSection.css";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { BackgroundLines } from "@/components/ui/background-lines";

const containerVariant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.4,
    },
  },
};

const Hero = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <>
      <Element
        name='home'
        className='w-[100vw] flex items-start justify-between h-[100vh] max-md:h-auto flex-row max-md:flex-col max-sm:flex-col  '
      >
        <BackgroundLines className=' w-[50vw] '>
          <motion.div variants={containerVariant} className='text  '>
            <motion.div
              variants={containerVariant}
              animate='visible'
              initial='hidden'
              className='sub-text  h-full  mt-[7em] max-md:mt-0 max-sm:mt-0'
            >
              <div className='stars'>***</div>
              <motion.div
                className='hero-text lg:w-[55vw] w-full break-normal z-10'
                style={{ color: `${dark ? "white" : "black"}` }}
              >
                I have a passion, for developing software applications and
                leveraging AI and large language models (LLMs) to create
                innovative solutions.
              </motion.div>
            </motion.div>
          </motion.div>
        </BackgroundLines>

        <div className='social-handles z-10 flex items-end justify-end h-[100vh] max-md:h-auto  max-sm:h-auto max-md:px-[3em] max-md:mt-[2em]'>
          <div className='button-container'>
            <a
              href='https://drive.google.com/file/d/11NKyw1Oew7IJ-keeKKWft-48Fx5NpYnq/view?usp=sharing'
              rel='noopener noreferrer'
              target='_blank'
              className='cursor-pointer'
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                className='link-button'
                style={{ color: `${dark ? "white" : "black"}` }}
              >
                Resume
                <svg
                  width='16'
                  height='15'
                  viewBox='0 0 16 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.33333 0.5H15V12.1667M15 0.5L1 14.5L15 0.5Z'
                    stroke='#999999'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>{" "}
              </motion.button>
            </a>
            <a
              href='https://www.twitter.com/tkworldclass'
              rel='noopener noreferrer'
              target='_blank'
              className='cursor-pointer'
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                className='link-button'
                style={{ color: `${dark ? "white" : "black"}` }}
              >
                Twitter
                <svg
                  width='16'
                  height='15'
                  viewBox='0 0 16 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.33333 0.5H15V12.1667M15 0.5L1 14.5L15 0.5Z'
                    stroke='#999999'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </motion.button>
            </a>
            <a
              href='https://www.linkedin.com/in/eboreime-thankgod-34864a1b1/'
              rel='noopener noreferrer'
              target='_blank'
              className='cursor-pointer'
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                className='link-button'
                style={{ color: `${dark ? "white" : "black"}` }}
              >
                Linkedin
                <svg
                  width='16'
                  height='15'
                  viewBox='0 0 16 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.33333 0.5H15V12.1667M15 0.5L1 14.5L15 0.5Z'
                    stroke='#999999'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>{" "}
              </motion.button>
            </a>
            <a
              href='https://github.com/Tk-brainCodes'
              rel='noopener noreferrer'
              target='_blank'
              className='cursor-pointer'
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                className='link-button'
                style={{ color: `${dark ? "white" : "black"}` }}
              >
                Github
                <svg
                  width='16'
                  height='15'
                  viewBox='0 0 16 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.33333 0.5H15V12.1667M15 0.5L1 14.5L15 0.5Z'
                    stroke='#999999'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </motion.button>
            </a>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Hero;
