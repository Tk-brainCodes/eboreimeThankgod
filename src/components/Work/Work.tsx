import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import Line from "../Line/Line";
import { WORK_DATA } from "./data";
import WorkCards from "./WorkCards";
import "./Work.css";
import Project from "../Projects/Project";

const Work = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div id="work" className="works">
      <div
        className="work-heading"
        style={{ color: `${dark ? "#999" : "black"}` }}
      >
        <Line>Featured Projects.</Line>
      </div>
      <Project /> <br />
      <div
        className="work-heading"
        style={{ color: `${dark ? "#999" : "black"}` }}
      >
        <Line>Other Projects.</Line>
      </div>
      <div className="work-cards">
        {WORK_DATA.map((data) => (
          <WorkCards data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Work;
