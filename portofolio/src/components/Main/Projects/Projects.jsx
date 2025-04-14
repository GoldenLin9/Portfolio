import "./Projects.css";
import Modal from "./Modal/Modal";
import React, { useState } from "react";

const Projects = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const openProjectModal = (project) => {
        console.log("Project clicked:", project);
        setCurrentProject(project);
        setIsModalOpen(true);
    }

    const projects = [
        {
            title: "Resume",
            shortDescription: "This is my resume that lists my education, skills, experiences, and projects. Within each project or experience, you can also find the github link to the project.",
            description: "This is my resume that lists my education, skills, experiences, and projects. Within each project or experience, you can also find the github link to the project.",
            image: "/images/resume.png",
            link: "/resume.pdf"
        },
        {
            title: "Cover Letter",
            shortDescription: "This is my cover letter for Relativity Space. It explains why I am a good candidate for this position. I also go into detail about my projects and how they relate to the position.",
            description: "This is my cover letter for Relativity Space. It explains why I am a good candidate for this position. I also go into detail about my projects and how they relate to the position.",
            image: "/images/cover_letter.png",
            link: "/cover_letter.pdf"
        },
        {
            title: "Research Proposal",
            shortDescription: "This is my research proposal for the University of Central Florida. This paper is a proposal to research predicting the duration and onset of Rapid Intsensification in Tropical Cyclones. I talk about this problem and it's approac to solvint it with an AI based solution.",
            description: "This is my research proposal for the University of Central Florida. This paper is a proposal to research predicting the duration and onset of Rapid Intsensification in Tropical Cyclones. I talk about this problem and it's approac to solvint it with an AI based solution.",
            image: "/images/research.png",
            link: "/research.pdf"
        }
    ]
    return (
        <section className="projects" id="projects">
        
            <h2 className = "title">My Projects</h2>

            <div className="projects-container">

                {projects.map((project, index) => (
                    <div className="project" key={index} onClick={() => openProjectModal(project)}>
                        <h2 className = "project-title">
                            {project.title}
                        </h2>
                        <p className = "project-description">
                            {project.shortDescription}
                        </p>

                        <div className = "project-image">
                            <img src = {project.image} alt = {project.title} width = "100%" height = "auto"/>   
                        </div>
                    </div>
                ))}

            </div>

            <Modal isModalOpen={isModalOpen} project={currentProject} onClose={() => setIsModalOpen(false)} />

        </section>
    );
}
export default Projects;