import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const About = () => {
  const { dark } = useContext(ThemeContext);



  return (
    <Element name="about" className="w-full px-6 md:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-20"
      >
        <div className="md:w-1/3">
          <h2
            className={`text-[4vw] leading-none font-medium ${
              dark ? "text-white" : "text-black"
            }`}
          >
            About
          </h2>
        </div>

        <div className="md:w-2/3 flex flex-col gap-12">
          <p
            className={`text-2xl md:text-4xl leading-tight font-light ${
              dark ? "text-white" : "text-black"
            }`}
          >
            I am a Software Developer passionate about bridging the gap between engineering and design. 
            I build exceptional products that are not only functional but also visually compelling.
          </p>


        </div>
      </motion.div>
    </Element>
  );
};

export default About;
