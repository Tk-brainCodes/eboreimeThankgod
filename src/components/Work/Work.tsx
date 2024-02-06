import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import Line from "../Line/Line";
import { WORK_DATA } from "./data";
import WorkCards from "./WorkCards";
import Project from "../Projects/Project";

const Work = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div id='work ' className=' w-full px-[35px] py-[40px] '>
      <div
        className='mb-[30px]'
        style={{ color: `${dark ? "#999" : "black"}` }}
      >
        <Line>Featured Projects.</Line>
      </div>
      <Project />
      <div
        className='work-heading'
        style={{ color: `${dark ? "#999" : "black"}` }}
      >
        <Line>Other Projects.</Line>
      </div>
      <div className='grid grid-cols-3 mt-[30px] gap-[20px] max-md:grid-cols-2 max-sm:grid-cols-1'>
        {WORK_DATA.map((data) => (
          <WorkCards data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Work;
