import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import "./HeroSection.css";
import { motion } from "framer-motion";
import {Element} from 'react-scroll'


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
      <Element name='home' className='hero-section'>
        <motion.div variants={containerVariant} className='text'>
          <motion.div
            variants={containerVariant}
            animate='visible'
            initial='hidden'
            className='sub-text'
          >
            <div className='stars'>***</div>
            <motion.div
              className='hero-text'
              style={{ color: `${dark ? "white" : "black"}` }}
            >
              I have a passion, for creating front end solutions that deliver
              performance and address practical problems. My expertise lies in
              designing and constructing high quality products and systems that
              make a difference.
            </motion.div>
          </motion.div>
        </motion.div>
        <div className='social-handles'>
          <div className='button-container'>
            <a
              href='https://www.twitter.com/tkworldclass'
              rel='noopener noreferrer'
              target='_blank'
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
            <a
              href='https://drive.google.com/file/d/1hIIjLVd5u3FQjVBT2KNxYze6-mm1e1a-/view?usp=sharing'
              rel='noopener noreferrer'
              target='_blank'
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
          </div>
        </div>
      </Element>
    </>
  );
};

export default Hero;
