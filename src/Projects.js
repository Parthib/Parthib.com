import React from "react";
import ProjectBubble from './props/ProjectBubble.js';
import data from './data/projectSynopsis.js';

function Projects(props) {
  return (
    <div className="projectsPage">
      <h2>Projects</h2>
      <h4>Read about things I've done!</h4>
      <div className="projectsContainer">
        {data.map((project) => (
          <ProjectBubble
            data={project}
            key={project.title}
            />
        ))}
        <div className="dummyProjDiv"/>
      </div>
    </div>
  )
}

export default Projects;
