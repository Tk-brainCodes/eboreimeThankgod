import { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../provider/theme.provider";
import Arrow from "../../assets/icons/arrow.svg";

interface WorkCardProp {
  id: number;
  name: string;
  description: string;
  stacks: string;
  link: string;
}

interface WorkCardData {
  data: WorkCardProp;
}

const WorkCards = ({ data }: WorkCardData) => {
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
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={cardVariants}
      className={`project-container px-4 py-4 ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      <a href={`${data.link}`} rel='noopener noreferrer' target='_blank'>
        <div
          className='project-title'
          style={{ color: `${dark ? "white" : "black"}` }}
        >
          {data.name}
          <img style={{ marginLeft: "5px" }} src={Arrow} alt='open-link' />
        </div>
      </a>

      <div
        className='project-description'
        style={{ color: `${dark ? "white" : "black"}` }}
      >
        {data.description}
      </div>
      <div
        className='project-stacks'
        style={{ color: `${dark ? "#999999" : "gray"}` }}
      >
        {data.stacks}
      </div>
    </motion.div>
  );
};

export default WorkCards;
