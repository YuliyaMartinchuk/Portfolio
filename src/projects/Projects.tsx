import React from 'react';
import {image1, image2} from "./description/description";
import {Container} from "../common/styles/Container";
import {ProjectsContainer} from "./ProjectsStyle";
import {Project, ProjectType} from "./project/Project";
import {Title} from '../common/styles/common';


const project: ProjectType[] = [
    {
        image: image1,
        title: 'Todolist',
        description: 'This course is designed for women who want to learn how to convert their online traffic into paying customers. We\'ll teach you how to identify your target audience, create compelling content, and use effective strategies to turn your website visitors into loyal fans. '
    },
    {
        image: image2,
        title: 'Social Network',
        description: 'This course is designed for women who want to learn how to convert their online traffic into paying customers. We\'ll teach you how to identify your target audience, create compelling content, and use effective strategies to turn your website visitors into loyal fans. '
    },
]

export const Projects = () => {
    return (

        <Container>
            <ProjectsContainer>
                <div>
                    <div>
                        <Title>Projects</Title>
                    </div>
                    <div>
                        {project.map((project) => (
                            <Project image={project.image}
                                     title={project.title}
                                     description={project.description}
                            />
                        ))}
                    </div>
                </div>
            </ProjectsContainer>
        </Container>

    );
};

