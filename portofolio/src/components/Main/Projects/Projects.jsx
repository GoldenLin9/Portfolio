import "./Projects.css";
import Modal from "./Modal/Modal";
import React, { useState } from "react";

const Projects = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const openProjectModal = (project) => {
        setCurrentProject(project);
        setIsModalOpen(true);
    }

    const projects = [
        {
            title: "Resume",
            shortDescription: "This is my resume that lists my education, skills, experiences, and projects. Within each project or experience, you can also find a GitHub link related to that experience.",
            description: "This is my resume that lists my education, skills, experiences, and projects. Within each project or experience, you can also find a GitHub link related to that experience.",
            image: process.env.PUBLIC_URL + "/images/resume.jpg",
            link: process.env.PUBLIC_URL + "/resume.pdf"
        },
        {
            title: "Cover Letter",
            shortDescription: "This is my cover letter for Relativity Space. It explains why I am a good candidate for this position. I also go into detail about my projects and how they relate to the position.",
            description: "This is my cover letter for Relativity Space. It explains why I am a good candidate for this position. I also go into detail about my projects and how they relate to the position.",
            image: process.env.PUBLIC_URL + "/images/cover_letter.jpg",
            link: process.env.PUBLIC_URL + "/cover_letter.pdf"
        },
        {
            title: "Research Proposal",
            shortDescription: "This document is my research proposal for the University of Central Florida. It researches an AI solution that predicts the onset and duration of Rapid Intensification in Tropical Cyclones. It also goes into detail about the importance of the problem, previously done research related to the topic, and the machine learning based solution to solving this problem.",
            description: "This document is my research proposal for the University of Central Florida. It researches an AI solution that predicts the onset and duration of Rapid Intensification in Tropical Cyclones. It also goes into detail about the importance of the problem, previously done research related to the topic, and the machine learning based solution to solving this problem.",
            image: process.env.PUBLIC_URL + "/images/research.jpg",
            link: process.env.PUBLIC_URL + "/research.pdf"
        },
        {
            title: "Instructions",
            shortDescription: "This document detail a set of instructions on how to set up an AWS EC2 instance. These instructions are meant for a beginner who has never used AWS before. It goes into detail about how to set up an account, create an instance, and connect to it using SSH.",
            description: "This document detail a set of instructions on how to set up an AWS EC2 instance. These instructions are meant for a beginner who has never used AWS before. It goes into detail about how to set up an account, create an instance, and connect to it using SSH.",
            image: process.env.PUBLIC_URL + "/images/instructions.jpg",
            link: process.env.PUBLIC_URL + "/instructions.pdf"
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