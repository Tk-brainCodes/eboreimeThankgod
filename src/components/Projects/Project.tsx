import React, { useEffect, useMemo, useRef } from "react";
import ProjectCard from "./Project-card";
import { PROJECT_DATA } from "./data";
import { Element } from "react-scroll";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const Project: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis with enhanced settings
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2, // Slows down the scroll duration for smoother effect
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for better acceleration
      smoothWheel: true, // Ensures wheel scrolling is smooth
    });

    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  // Use Framer Motion's useScroll to track the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Memoize the project data to prevent unnecessary recalculations
  const memoizedProjectData = useMemo(() => PROJECT_DATA, []);

  return (
    <Element
      name='projects'
      className='mb-[10em] max-md:mb-[15em] w-full flex items-center justify-center gap-[30px] flex-col '
    >
      {memoizedProjectData.map((data, index) => {
        const targetScale = 1 - (memoizedProjectData.length - index) * 0.05;

        return (
          <ProjectCard
            key={data.id}
            {...data}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            youtube={data.youtube || ""}
            image={data.image || ""}
            targetScale={targetScale}
            i={index}
          />
        );
      })}
    </Element>
  );
};

export default React.memo(Project);
