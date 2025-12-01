import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import { ARTICLE_LIST } from "./data";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Articles = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <Element name="articles" className="w-full px-6 md:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <h2
          className={`text-[4vw] leading-none font-medium mb-16 ${
            dark ? "text-white" : "text-black"
          }`}
        >
          Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLE_LIST.map((article, index) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-lg border transition-all duration-300 ${
                  dark
                    ? "border-white/10 hover:bg-white/5"
                    : "border-black/10 hover:bg-black/5"
                }`}
              >
                <h3
                  className={`text-2xl font-medium mb-4 group-hover:underline underline-offset-4 ${
                    dark ? "text-white" : "text-black"
                  }`}
                >
                  {article.title}
                </h3>
                <p
                  className={`text-base leading-relaxed mb-4 ${
                    dark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {article.desc}
                </p>
                <span
                  className={`text-xs uppercase tracking-wider ${
                    dark ? "text-white/60" : "text-black/60"
                  }`}
                >
                  Read Article &rarr;
                </span>
              </motion.div>
            </a>
          ))}
        </div>
      </motion.div>
    </Element>
  );
};

export default Articles;
