import React from 'react';
import {
    calculator, descriptionCalculator, descriptionProjects,
    descriptionSocialNetWork,
    descriptionTodolist,
    socialNetWork,
    todolist
} from "./description/description";
import {Container} from "../common/styles/Container";
import {ProjectsContainer} from "./ProjectsStyle";
import {Project, ProjectType} from "./project/Project";
import {Fade} from "react-awesome-reveal";



const project: ProjectType[] = [
    {
        image: todolist,
        title: 'Todolist',
        description: descriptionTodolist,
        href: 'https://www.google.com/',
        gitHubHref: 'https://github.com/YuliyaMartinchuk'
    },
    {
        image: socialNetWork,
        title: 'Social Network',
        description: descriptionSocialNetWork,
        href: 'https://www.google.com/',
        gitHubHref: 'https://github.com/YuliyaMartinchuk'
    },
    {
        image: calculator,
        title: 'Calculator',
        description: descriptionCalculator,
        href: 'https://www.google.com/',
        gitHubHref: 'https://github.com/YuliyaMartinchuk'
    },
]

export const Projects = () => {
    return (
        <Container id={"Container"}>
            <ProjectsContainer id={"ProjectsContainer"}>
                <div id={"Text"}>
                    <h2>Projects
                        <p>{descriptionProjects}</p>
                    </h2>
                </div>

                <div id={"Projects"}>
                    {project.map((project, index) => (
                        <Fade>
                        <Project
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            href={project.href}
                            gitHubHref={project.gitHubHref}
                        />
                        </Fade>
                    ))}
                </div>
            </ProjectsContainer>
        </Container>

    );
};

