import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface CompanyProp {
  title: string;
  company: string;
  link: string;
  desc: string;
  image: string;
  author: string;
  authorAvatar: string;
  date: string;
}

interface CompanyDataProps {
  data: CompanyProp;
}

export function ArticleList({ data }: CompanyDataProps) {
  const { dark } = useContext(ThemeContext);

  return (
    <CardContainer className='inter-var'>
      <CardBody
        className={cn(
          "bg-gray-50 relative flex items-start justify-between flex-col group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-[530px] sm:w-[370px] mb-[20px]  rounded-xl p-6 border",
          dark && "bg-zinc-950"
        )}
      >
        <CardItem
          translateZ='50'
          className={cn(
            "text-xl font-bold  text-[#0f172a]",
            dark && "text-white"
          )}
        >
          {data.title}
        </CardItem>
        <CardItem
          as='p'
          translateZ='60'
          className='text-neutral-500 text-sm max-w-sm mt-2 '
        >
          {data.desc}
        </CardItem>
        <CardItem translateZ='100' className='w-full mt-4'>
          <img
            src={data.image}
            height='1000'
            width='1000'
            className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
            alt='thumbnail'
          />
        </CardItem>
        <div className='flex justify-between w-full items-center mt-20'>
          <CardItem
            translateZ={20}
            className={cn(
              "px-4 py-2rounded-xl text-xs font-normal text-[#0f172a] ",
              dark && "text-[#d1d5db]"
            )}
          >
            {data.date}
          </CardItem>
          <a href={data.link} rel='noopener noreferrer' target='_blank'>
            <CardItem
              translateZ={20}
              as='button'
              className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
            >
              Read more →
            </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}
