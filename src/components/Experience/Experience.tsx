import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import { Experience } from "./Data";
import JobCard from "./JobCard";
import Line from "../Line/Line";
import "./Experience.css";
import { Element } from "react-scroll";

const JobExperience = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <Element name='experience' className='Experience'>
      <div
        className='container-title'
        style={{ color: `${dark ? "#999" : "black"}` }}
      >
        <Line>Experience.</Line>
      </div>
      <div className='cards'>
        {Experience.map((companies, index) => (
          <JobCard company={companies} key={index} />
        ))}
      </div>
    </Element>
  );
};

export default JobExperience;
