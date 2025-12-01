import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const GetIntouch = () => {
  const { dark } = useContext(ThemeContext);
  const recipientEmail = "ikhuohohoneboreimethankgod@gmail.com";

  return (
    <Element name="contact" className="w-full px-6 md:px-20 py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center"
      >
        <h2
          className={`text-[8vw] leading-none font-medium mb-8 ${
            dark ? "text-white" : "text-black"
          }`}
        >
          Let's Talk
        </h2>
        <p
          className={`text-xl md:text-2xl max-w-2xl mb-12 ${
            dark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Interested in working together? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        
        <a
          href={`mailto:${recipientEmail}`}
          className={`group/btn relative inline-block px-10 py-4 rounded-full text-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105 ${
            dark
              ? "bg-white text-black"
              : "bg-black text-white"
          }`}
        >
          <span className="relative z-10 flex items-center gap-2">
            Get in Touch
          </span>
          <div className={`absolute inset-0 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500 ${
            dark ? "bg-gray-200" : "bg-gray-800"
          }`} />
        </a>
      </motion.div>
    </Element>
  );
};

export default GetIntouch;
