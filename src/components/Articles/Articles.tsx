import { useEffect, useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import Line from "../Line/Line";
import { ARTICLE_LIST } from "./data";
import ArticleList from "./ArticleList";
import "./Article.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

const Articles = () => {
  const { dark } = useContext(ThemeContext);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <Element
      name='articles'
      className='Articles px-[35px] py-[40px] w-full border-t border-gray-700'
    >
      <div
        className='Article-heading'
        style={{ color: `${dark ? "#999" : "black"}` }}
      >
        <Line>Articles.</Line>
      </div>
      <motion.div
        ref={ref}
        className='Articles grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2'
      >
        {ARTICLE_LIST.map((data) => (
          <ArticleList data={data} key={data.id} />
        ))}
      </motion.div>
    </Element>
  );
};

export default Articles;
