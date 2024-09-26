import { ProjectCard } from "./Project-card";
import { PROJECT_DATA } from "./data";
import { Element } from "react-scroll";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const Project = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Element
        name='projects'
        className='mb-[5em] max-md:mb-[15em] w-full flex items-center justify-center gap-[30px] flex-col '
      >
        {PROJECT_DATA.map((data, index) => {
          const targetScale = 1 - (PROJECT_DATA.length - index) * 0.05;
          return (
            <ProjectCard
              key={index}
              i={index}
              {...data}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </Element>
    </>
  );
};

export default Project;
