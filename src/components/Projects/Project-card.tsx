/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { memo, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons";
import PlayVideo from "../../assets/images/play.svg";
import { Loader } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReactPlayer from "react-player";

interface ProjectData {
  id: number;
  name: string;
  description: string;
  live: string;
  github: string;
  color: string;
  stack: string;
  image: string;
  youtube: string;
}

interface ProjectCardProps extends ProjectData {
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
  i: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  live,
  github,
  color,
  youtube,
  stack,
  image,
  range,
  targetScale,
  progress,
  i,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false); // State for loading the video

  // Use Framer Motion's useScroll to track the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Transform the image scale based on scroll progress
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  // Transform the card scale based on the global scroll progress and the specified range
  const scale = useTransform(progress, range, [1, targetScale]);

  const handleDialogOpen = () => {
    setLoading(true); // Show loading when the dialog opens
  };

  const handleVideoReady = () => {
    setLoading(false); // Hide loading when the video is ready
  };

  return (
    <div
      ref={containerRef}
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
          <Dialog onOpenChange={handleDialogOpen}>
            <DialogTrigger>
              <div className='imgContainer relative w-[500px] h-[300px] rounded-3xl overflow-hidden'>
                <motion.div
                  style={{ scale: imageScale }}
                  className='w-full h-full relative'
                >
                  <img
                    src={image}
                    alt='image'
                    className='object-cover w-full h-full'
                  />
                  {/* Conditional rendering of Play or Login icon */}
                  <div className='absolute inset-0 flex items-center justify-center cursor-pointer'>
                    <img
                      src={PlayVideo} // Play icon if video has not started
                      alt='play_video'
                      className='h-20 w-20 text-white opacity-75 hover:opacity-100 transition-opacity duration-300'
                    />
                  </div>
                </motion.div>
              </div>
            </DialogTrigger>
            <DialogContent className='w-full max-w-[90%] md:max-w-[80%] lg:max-w-[60%] h-auto p-4 rounded-lg'>
              <div className='w-full h-auto relative'>
                {/* Show loading icon until the video is ready */}
                {loading && (
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <Loader
                      className={`h-16 w-16 animate-spin text-[#${color}]`}
                    />
                  </div>
                )}
                <ReactPlayer
                  url={youtube}
                  width='100%'
                  height='400px'
                  controls={true}
                  onReady={handleVideoReady} // Hide loading icon when video is ready
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
    </div>
  );
};

// Export the memoized component to prevent unnecessary re-renders
export default memo(ProjectCard);
