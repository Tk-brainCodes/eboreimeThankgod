import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import Line from "../Line/Line";
import { ARTICLE_LIST } from "./data";
import { ArticleList } from "./ArticleList";
import "./Article.css";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Articles = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <Element
      name='articles'
      className='Articles px-[35px] py-[40px] w-full border-t border-gray-700'
    >
      <div
        className='Article-heading'
        style={{ color: `${dark ? "#999" : "black"}` }}
      >
        <Line>Article Writings.</Line>
      </div>
      <motion.div className='Articles grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[10px] items-start mt-[2em]'>
        {ARTICLE_LIST.map((data) => (
          <ArticleList data={data} key={data.id} />
        ))}
      </motion.div>
    </Element>
  );
};

export default Articles;
