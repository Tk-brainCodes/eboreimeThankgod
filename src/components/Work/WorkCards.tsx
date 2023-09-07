import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import Arrow from "../../assets/icons/arrow.svg";
import { motion } from "framer-motion";

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

  return (
    <motion.div whileHover={{ scale: 1.1 }} className='project-container'>
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
