import React from 'react';
import {description1, description2, image1, image2} from "./description/description";
import {ProjecstTitle, ProjectsWrapper, ProjectsElements, ProjectsElement} from "./ProjectsStyle"
import {Container} from "../common/styles/Container";
import {ProjectsContainer} from "./ProjectsStyle";
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <ProjectsWrapper>
            <Container>
                <ProjectsContainer>
                    <div>
                        <ProjecstTitle>Projects</ProjecstTitle>
                    </div>
                    <ProjectsElements>
                        <ProjectsElement>
                            <Project title={"Project"} description={description1} image={image1}/>
                        </ProjectsElement>
                        <ProjectsElement>
                            <Project title={"Project"} description={description2} image={image2}/>
                        </ProjectsElement>
                    </ProjectsElements>
                </ProjectsContainer>
            </Container>
        </ProjectsWrapper>
    );
};

