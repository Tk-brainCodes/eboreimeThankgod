import { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ThemeContext } from "../../provider/theme.provider";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CompanyProp {
  title: string;
  company: string;
  link: string;
  desc: string;
  image: string;
}

interface CompanyDataProps {
  data: CompanyProp;
}

const ArticleList = ({ data }: CompanyDataProps) => {
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
      className='mt-10'
    >
      <div className='w-full'>
        <div
          className={cn(
            "bg-slate-100 h-[350px] w-[250px] max-sm:w-full max-md:w-full max-sm:h-auto max-md:h-auto group  border-gray-200 rounded-lg mb-5",
            dark && "bg-zinc-950"
          )}
        >
          <a href={data.link} rel='noopener noreferrer' target='_blank'>
            <img className='rounded-t-lg' src={data.image} alt='' />
          </a>
          <div className='p-5'>
            <a href='#'>
              <h5
                className={cn(
                  "text-gray-900 font-bold text-2xl tracking-tight mb-2",
                  dark && "text-white"
                )}
              >
                {data.title}
              </h5>
            </a>
            <p
              className={cn(
                "font-normal text-gray-700 mb-3 line-clamp-3",
                dark && "text-slate-500"
              )}
            >
              {data.desc}
            </p>
            <a
              className='mt-[10px] px-6 gap-x-4 group py-3 group-hover:bg-emerald-800 transition ease-in-out group-hover:text-white bg-white text-neutral-900  focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm  text-center inline-flex items-center'
              href={data.link}
              rel='noopener noreferrer'
              target='_blank'
            >
              Read more
              <ArrowRight className='text-neutral-900 group-hover:animate-bounce group-hover:text-white ' />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleList;
