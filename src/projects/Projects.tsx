import React from 'react';
import {image1, image2} from "./description/description";
import {ProjectsWrapper,} from "./ProjectsStyle"
import {Container} from "../common/styles/Container";
import {ProjectsContainer} from "./ProjectsStyle";
import {Project, ProjectType} from "./project/Project";
import {Title} from '../common/styles/common';


const project: ProjectType[] = [
    {
        image: image1,
        title: 'Todolist',
        description: 'About Todolist'
    },
    {
        image: image2,
        title: 'Social Network',
        description: 'About Social Network'
    },
]

export const Projects = () => {
    return (
        <ProjectsWrapper>
            <Container>
                <ProjectsContainer>
                    <Title>Projects</Title>
                    <ul>{project.map((project) => (
                        <li>
                            <Project image={project.image}
                                     title={project.title}
                                     description={project.description}
                            />
                        </li>
                    ))}
                    </ul>
                </ProjectsContainer>
            </Container>
        </ProjectsWrapper>
    );
};

