import { ThemeContext } from "../../provider/theme.provider";
import { useContext, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowUpRight, Github, X } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface DataCardProp {
  id: number;
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
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DataCardProp | null>(null);

  const styles = {
    backgroundSize: `${data.id === 1 ? "contain" : "cover"}`,
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${data.image})`,
    backgroundPosition: "center",
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
    <Drawer open={open} onOpenChange={setOpen}>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={inView ? "visible" : "hidden"}
        variants={cardVariants}
      >
        <DrawerTrigger asChild>
          <div
            className={`w-full duration-300 transition ease-in cursor-pointer' rounded-[20px] lg:w-[380px] border-none mb-[2em] ${
              dark ? "bg-neutral-700" : "white"
            } rounded-[20px] shadow `}
            onClick={() => setSelectedItem(data)}
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
                  <a
                    href={data.github}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <Github className='w-6 h-6 font-semibold text-xl text-white' />
                  </a>
                </span>
              </div>
              <div className='absolute hidden group-hover:block rounded-[20px] inset-0 bg-black opacity-50' />
            </div>
          </div>
        </DrawerTrigger>
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
      {selectedItem && (
        <DrawerContent
          className={cn(
            "flex flex-col border-none items-center justify-center text-center",
            dark && "bg-gray-950"
          )}
        >
          <DrawerHeader className='text-left'>
            <DrawerTitle
              className={cn("text-3xl font-semibold", dark && "text-white")}
            >
              <img
                src={data.image}
                alt='project-image'
                className={cn(
                  "w-[100px] h-[80px] shadow-md object-cover mb-1 rounded-md"
                )}
              />
              {selectedItem.name}
            </DrawerTitle>
            <DrawerDescription
              className={cn(
                "text-xl font-normal tracking-tighter  text-slate-700",
                dark && "text-slate-200"
              )}
            >
              {selectedItem.description}
            </DrawerDescription>
            <div
              className={cn(
                "text-slate-600 text-sm tracking-widest",
                dark && "text-slate-400"
              )}
            >
              {selectedItem.stack}
            </div>
          </DrawerHeader>
          <DrawerFooter className='pt-2 group'>
            <DrawerClose asChild>
              <Button variant='outline' className='px-6 py-4 rounded-full'>
                <X
                  className={cn(
                    "w-7 h-7 text-neutral-900 group-hover:text-neutral-900 transition ease-in-out",
                    dark && "text-white"
                  )}
                />
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      )}
    </Drawer>
  );
};

export default ProjectCard;
