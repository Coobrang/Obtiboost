import React, { useState } from "react";
import "./Projects.css";
import ProjectsData from "../../Data/Projects.json"

const imagePath = (imageName) => {
    try {
        return require(`../../../assets/${imageName}`);
    } catch (err) {
        return null;
    }
};

const Projects = () => {
    const [activeProjec, setActiveProject] = useState(1);

    const handleProjectsClick = (id) => {
        setActiveProject(id);
    };
    
  return (
    <div className="projects">
        <div className="header">
            <div className="title">
                <h2>{ProjectsData.header.title}</h2>
            </div>
            <div className="button">
                <a href={ProjectsData.header.button.link}>{ProjectsData.header.button.text}</a>
            </div>
        </div>

        <div className="container">
            {ProjectsData.projects.map((projects) => {
                const imgSrc = imagePath(projects.image);
                return(
                    <div
                    key={projects.id}
                    className={`project ${projects.id === activeProjec ? 'active' : 'inactive'}`}
                    onClick={() => handleProjectsClick(projects.id)}
                    style={{ backgroundImage: `url(${imgSrc})` }}
                    >
                    {projects.id === activeProjec && (
                        <div className="project-info">
                            <h3>{projects.title}</h3>
                            <p>{projects.description}</p>
                        </div>
                    )}
                    </div>
                )
            })}
        </div>
    </div>
  );
};

export default Projects;
