import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import { Experience } from "./Data";
import JobCard from "./JobCard";
import Line from "../Line/Line";
import { Element } from "react-scroll";

const JobExperience = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <Element
      name='experience'
      className='w-full border-b border-gray-700 p-8 flex gap-8'
    >
      <div className={`w-1/3 ${dark ? "text-gray-400" : "text-black"}`}>
        <Line>Experience.</Line>
      </div>
      <div className='w-2/3 flex justify-between gap-8 flex-wrap p-8'>
        {Experience.map((companies, index) => (
          <JobCard company={companies} key={index} />
        ))}
      </div>
    </Element>
  );
};

export default JobExperience;
