import { useState, useEffect } from "react";
import "../../src/App.css";
import data from "../projects.json"

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState([]);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData();
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
      <div>
        <h1 className="projectTitle">Projects</h1>
        {data.map((project, index) => (
          <div key={index}>
            <h1 className="projectNames">{project.name}</h1>
            <img
              src={project.image}
              className="projectImage"
              alt={project.name}
            />
             <a href={project.git} className="projectBody" id="gitLink">
              Github
            </a>
            <a href={project.live} className="projectBody" id="liveLink">
              Live site
            </a>
            <h2 className="projectDescription"> {project.description}</h2>
            <h2 className="tech">Technologies Used: {project.tech}</h2>
           
          </div>
        ))}
      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
