import { ThemeContext } from "../../provider/theme.provider";
import { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface DataCardProp {
  name: string;
  description: string;
  live: string;
  stack: string;
  github: string;
  image: string;
}

interface DataProp {
  data: DataCardProp;
  key: string | number;
}

const ProjectCard = ({ data }: DataProp) => {
  const { dark } = useContext(ThemeContext);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });

  const styles = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${data.image})`,
    width: "100%",
    height: "250px",
  };

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
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <div
        className={`w-full duration-300 transition ease-in cursor-pointer' rounded-[20px] lg:w-[380px] border-none mb-[2em] ${
          dark ? "bg-neutral-700" : "white"
        } rounded-[20px] shadow `}
      >
        <div
          className='relative w-full rounded-[20px] flex flex-col items-center justify-between cursor-pointer group  bg-neutral-600'
          style={styles}
        >
          <Button className='relative hidden group group-hover:flex group-hover:items-center group-hover:gap-x-4 hover:bg-emerald-500 to-light-green-400 hover:text-white z-10 mt-[6em] px-8 py-8 rounded-md bg-white text-neutral-800 transition ease-in-out'>
            <a href={data.live} rel='noopener noreferrer' target='_blank'>
              View Live
            </a>
          </Button>

          <div className='relative z-10 w-full px-4 hidden group-hover:flex group-hover:items-center mb-[25px] group-hover:justify-between'>
            <h2 className='text-xl block font-semibold text-white'>
              <p className='font-normal text-white mb-1 text-sm'>WEBSITE</p>
              {data.name}
            </h2>
            <span className='flex gap-x-3 mt-6'>
              <a href={data.live} rel='noopener noreferrer' target='_blank'>
                <ArrowUpRight className='w-7 h-7 font-semibold text-xl text-white' />
              </a>
              <a href={data.github} rel='noopener noreferrer' target='_blank'>
                <Github className='w-6 h-6 font-semibold text-xl text-white' />
              </a>
            </span>
          </div>
          <div className='absolute hidden group-hover:block rounded-[20px] inset-0 bg-black opacity-50' />
        </div>
      </div>
      <p
        className={cn(
          "text-xl flex gap-x-2 items-center justify-starttext-neutral-900 font-normal tracking-tight mb-[40px]",
          dark && "text-white"
        )}
      >
        {data.name}
        <span className='w-[200px] h-[2px] bg-neutral-600 flex flex-1' />
      </p>
    </motion.div>
  );
};

export default ProjectCard;
