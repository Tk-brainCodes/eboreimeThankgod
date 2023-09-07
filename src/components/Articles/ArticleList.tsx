import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import Arrow from "../../assets/icons/arrow.svg";

interface CompanyProp {
  title: string;
  company: string;
  link: string;
}

interface CompanyDataProps {
  data: CompanyProp;
}

const ArticleList = ({ data }: CompanyDataProps) => {
  const { dark } = useContext(ThemeContext);
  return (
    <div className='mt-10'>
      <div
        className={`${
          dark ? "text-white" : "text-black"
        } flex items-center justify-start  flex-wrap font-semibold hover:text-[#6d8b74] transition ease-in-out font-pp-neue-montreal text-3xl leading-100 tracking-wide  cursor-pointer`}
      >
        {data.title}
        <a
          href={data.link}
          rel='noopener noreferrer'
          target='_blank'
          className='ml-2 flex flex-nowrap gap-3'
        >
          – {data.company}
          <img src={Arrow} alt='open-link' />
        </a>
      </div>
    </div>
  );
};

export default ArticleList;
