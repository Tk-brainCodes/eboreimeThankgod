import { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ThemeContext } from "../../provider/theme.provider";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export interface WorkCardProp {
  id: number;
  name: string;
  description: string;
  stacks: string;
  link?: string;
  github?: string;
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
      <span className='flex w-full items-center justify-between mb-3'>
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
        {data.github && (
          <a
            href={`${data.github}`}
            rel='noopener noreferrer'
            className='hover:underline'
            target='_blank'
          >
            <GitHubLogoIcon className='w-[20px] h-[20px] text-white group-hover:text-[#88a28d]' />{" "}
          </a>
        )}
      </span>

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
