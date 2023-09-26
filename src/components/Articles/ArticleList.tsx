import { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../provider/theme.provider";
import Arrow from "../../assets/icons/arrow.svg";

interface CompanyProp {
  title: string;
  company: string;
  link: string;
}

interface CompanyDataProps {
  data: CompanyProp;
}

const ArticleList = ({ data }: CompanyDataProps) => {
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
      className='mt-10'
    >
      <div
        className={`${
          dark ? "text-white" : "text-black"
        } flex items-center justify-start  flex-wrap font-semibold hover:text-[#6d8b74] transition ease-in-out font-pp-neue-montreal text-3xl leading-100 tracking-wide  cursor-pointer`}
      >
        {data.title}
        <a
          href={data.link}
          rel='noopener noreferrer'
          target='_blank'
          className='ml-2 flex flex-nowrap gap-3'
        >
          – {data.company}
          <img src={Arrow} alt='open-link' />
        </a>
      </div>
    </motion.div>
  );
};

export default ArticleList;
