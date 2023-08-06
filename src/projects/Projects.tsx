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


const project: ProjectType[] = [
    {
        image: todolist,
        title: 'Todolist',
        description: descriptionTodolist
    },
    {
        image: socialNetWork,
        title: 'Social Network',
        description: descriptionSocialNetWork
    },
    {
        image: calculator,
        title: 'Calculator',
        description: descriptionCalculator
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
                        {project.map((project) => (
                            <Project image={project.image}
                                     title={project.title}
                                     description={project.description}
                            />
                        ))}
                    </div>

            </ProjectsContainer>
        </Container>

    );
};

