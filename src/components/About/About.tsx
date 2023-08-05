import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import "./About.css";
import Line from "../Line/Line";

import { Element } from "react-scroll";

const About = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <Element name='about' className='About'>
      <div
        className='title-name'
        style={{ color: `${dark ? "#999" : "black"}` }}
      >
        <Line>About.</Line>
      </div>
      <div className='about-container'>
        <div className='title'>
          <div className='tech-stack'>
            <div
              className='stack-names'
              style={{ color: `${dark ? "#999" : "black"}` }}
            >
              <div className='star'>***</div> Stack
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
          className='description'
          style={{ color: `${dark ? "white" : "black"}` }}
        >
          <div className='gradient-border'>
            <div className='my-image' />
          </div>
          <div className='about-section-text'>
            I am a front end engineer who's passionate about working closely
            with both engineers and designers to create exceptional products
            that meet specific needs. My main focus is, on writing code that can
            be used across multiple platforms resulting in user experiences that
            are both visually appealing and impactful. I truly love what I do.
            <br />
            <br />
            With a profound curiosity and passion for continuous learning, I
            embrace emerging technologies and seek challenges in the front-end
            landscape. My adaptability, creativity, and dedication to excellence
            drive me to surpass expectations, ensuring user delight and
            satisfaction in every project.
            <br />
          </div>
        </div>
      </div>
    </Element>
  );
};
export default About;
