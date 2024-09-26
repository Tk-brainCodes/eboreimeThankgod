/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons";

export function ProjectCard({
  name,
  description,
  live,
  github,
  color,
  stack,
  image,
  range,
  targetScale,
  progress,
  i,
}: {
  id: number;
  name: string;
  description: string;
  live: string;
  color: string;
  stack: string;
  github: string;
  image: string;
  range: number[];
  targetScale: number;
  progress: any;
  i: number;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='cardContainer h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        className='card flex flex-col relative h-[500px] w-[1000px] max-md:h-auto max-sm:h-auto rounded-3xl p-12'
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2 className='text-center m-0 text-2xl font-semibold'>{name}</h2>
        <div className='flex max-md:flex-col max-md:-mt-[0.1em] max-sm:flex-col items-start max-md:items-center justify-center h-full mt-12 gap-12'>
          <div className='desc w-[40%] relative '>
            <p className='text-xl first-letter:text-2xl leading-6 mb-[0.6em]'>
              {description}
            </p>
            <span className='text-sm text-[#021526]'>{stack}</span>
            <span className='flex items-center gap-[20px] mt-[2em] '>
              <a
                href={github}
                rel='noopener noreferrer'
                target='_blank'
                className='flex gap-1 items-center underline cursor-pointer text-base'
              >
                <GitHubLogoIcon className='w-[24px] h-[24px]' /> Source
              </a>
              <a
                href={live}
                rel='noopener noreferrer'
                target='_blank'
                className='flex gap-1 items-center underline cursor-pointer text-base'
              >
                <Link1Icon className='w-[25px] h-[25px]' /> Live
              </a>
            </span>
          </div>
          <div className='imgContainer relative w-[60%] h-full rounded-3xl overflow-hidden'>
            <motion.div style={{ scale: imageScale }} className='w-full h-full'>
              <img
                src={image}
                alt='image'
                className='object-cover w-full h-full'
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
