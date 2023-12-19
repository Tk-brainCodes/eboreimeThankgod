import Arrow from "../../assets/icons/arrow.svg";
import { ThemeContext } from "../../provider/theme.provider";
import { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

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
}

const ProjectCard = ({ data }: DataProp) => {
  const { dark } = useContext(ThemeContext);
  const controls = useAnimation();
  const [ref, inView] = useInView();

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
    >
      <Card
        className={`w-full hover:scale-105  hover:translate-y-1 duration-300 transition ease-in-out cursor-pointer' lg:w-[375px] border-none mb-[2em] ${
          dark ? "bg-neutral-700" : "white"
        } rounded-[20px] shadow `}
      >
        <div
          className='aspect-w-16 aspect-h-9 rounded-t-[20px] bg-[image-url] bg-cover bg-center'
          style={styles}
        />
        <CardHeader
          className={`${
            dark ? "text-stone-300" : "text-gray-800"
          } text-[25px] font-medium leading-relaxed`}
        >
          {data.name}
        </CardHeader>
        <CardContent
          className={` cursor-text flex items-start justify-start flex-col`}
        >
          <CardDescription
            className={`${
              dark ? "text-stone-300" : "text-slate-700"
            } mt-[1em] text-base  font-light leading-6`}
          >
            {data.description}
          </CardDescription>
          <div className='mt-2 md:mt-4'>
            <span
              className={`${
                dark ? "text-stone-300" : "text-slate-400"
              } text-base md:text-lg font-normal leading-relaxed`}
            >
              Tech stack:
            </span>
            <span
              className={`${
                dark ? "text-stone-300" : "text-slate-400"
              } text-sm md:text-base font-light ml-2 leading-relaxed`}
            >
              {data.stack}
            </span>
          </div>
        </CardContent>
        <CardFooter className='flex flex-row items-center gap-6 justify-between  w-full'>
          <a href={`${data.live}`} target='_blank'>
            <div className='flex items-center gap-3'>
              <img src={Arrow} alt='open-link' />

              <span
                className={`${
                  dark ? "text-white" : "black"
                } text-[14px]  font-normal underline leading-relaxed`}
              >
                Live Preview
              </span>
            </div>
          </a>
          {data.github === "" ? null : (
            <a href={`${data.github}`} target='_blank'>
              <div className='flex items-center gap-3'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z'
                    fill={`${dark ? "white" : "#999"}`}
                  />
                </svg>

                <span
                  className={`${
                    dark ? "text-white" : "text-black"
                  } text-[14px] font-normal underline leading-relaxed`}
                >
                  View Code
                </span>
              </div>
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
