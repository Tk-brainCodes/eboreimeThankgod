import { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ThemeContext } from "../../provider/theme.provider";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

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
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      className={`rounded-md w-[380px] max-sm:w-full max-md:w-full relative group transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 flex flex-col items-start justify-between px-4 py-4 ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      <a
        href={`${data.link}`}
        rel='noopener noreferrer'
        className='hover:underline'
        target='_blank'
      >
        <div
          className='flex items-center justify-between gap-x-2'
          style={{ color: `${dark ? "white" : "black"}` }}
        >
          <span className='text-xl font-semibold tracking-tighter'>
            {data.name}
          </span>
          <ArrowUpRight className='group-hover:animate-bounce font-normal group-hover:text-[#88a28d] text-2xl duration-200 transition ease-in-out' />
        </div>
      </a>

      <div className='w-full' style={{ color: `${dark ? "white" : "black"}` }}>
        {data.description}
      </div>
      <div className={cn("text-sm mt-[20px] text-gray-500", dark && "#999999")}>
        {data.stacks}
      </div>
    </motion.div>
  );
};

export default WorkCards;
