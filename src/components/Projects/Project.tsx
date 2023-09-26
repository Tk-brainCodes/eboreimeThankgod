import ProjectCard from "./Project-card";
import { PROJECT_DATA } from "./data";
import { Element } from "react-scroll";

const Project = () => {
  return (
    <>
      <Element
        name='projects'
        className='px-[2em]  py-[1em] w-full flex items-center justify-between flex-wrap'
      >
        {PROJECT_DATA.map((data, index) => (
          <ProjectCard data={data} key={index} />
        ))}
      </Element>
    </>
  );
};

export default Project;
