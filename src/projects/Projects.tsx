import React from 'react';
import {
    counter, descriptionCalculator, descriptionProjects,
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
        href: 'https://YuliyaMartinchuk.github.io/todolist-rtk',
        gitHubHref: 'https://github.com/YuliyaMartinchuk'
    },
    {
        image: socialNetWork,
        title: 'Social Network',
        description: descriptionSocialNetWork,
        href: 'https://YuliyaMartinchuk.github.io/samurai-way',
        gitHubHref: 'https://github.com/YuliyaMartinchuk'
    },
    {
        image: counter,
        title: 'counter',
        description: descriptionCalculator,
        href: 'https://YuliyaMartinchuk.github.io/counter',
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

