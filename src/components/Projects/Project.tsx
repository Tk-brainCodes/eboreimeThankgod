import ProjectCard from "./Project-card";
import { PROJECT_DATA } from "./data";
import "./Project.css";
import { Element } from "react-scroll";

const Project = () => {
  return (
    <>
      <Element name="projects" className="projects" id="column-reverse">
        {PROJECT_DATA.map((data, index) => (
          <ProjectCard data={data} key={index} />
        ))}
      </Element>
    </>
  );
};

export default Project;
