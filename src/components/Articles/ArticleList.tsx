import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import Arrow from "../../assets/icons/arrow.svg";

interface CompanyProp {
  title: string;
  company: string;
  link: string;
}

interface CompanyDataProps {
  data: CompanyProp
}

const ArticleList = ({ data }: CompanyDataProps) => {
  const { dark } = useContext(ThemeContext);
  return (
    <div className='Article-container'>
      <div className='Article-heading-text'>
        <div
          className='Article-heading-title'
          style={{ color: `${dark ? "white" : "black"}` }}
        >
          {data.title} –
        </div>{" "}
        {data.company}
        <a href={`${data.link}`} rel='noopener noreferrer' target='_blank'>
          <img src={Arrow} alt='open-link' />
        </a>
      </div>
    </div>
  );
};

export default ArticleList;
