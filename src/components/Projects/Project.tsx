import ProjectCard from "./Project-card";
import { PROJECT_DATA } from "./data";
import { Element } from "react-scroll";

const Project = () => {
  return (
    <>
      <Element
        name='projects'
        className=' w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[20px] items-center '
      >
        {PROJECT_DATA.map((data, index) => (
          <ProjectCard data={data} key={index} />
        ))}
      </Element>
    </>
  );
};

export default Project;
