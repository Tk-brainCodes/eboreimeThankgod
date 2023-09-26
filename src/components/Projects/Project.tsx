import ProjectCard from "./Project-card";
import { PROJECT_DATA } from "./data";
import { Element } from "react-scroll";
import "./project.css";

const Project = () => {
  return (
    <>
      <Element
        name='projects'
        className='project w-full flex items-center gap-[32px] flex-wrap'
      >
        {PROJECT_DATA.map((data, index) => (
          <ProjectCard data={data} key={index} />
        ))}
      </Element>
    </>
  );
};

export default Project;
