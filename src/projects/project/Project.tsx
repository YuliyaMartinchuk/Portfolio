import React from 'react';
import {ProjectContainer, ProjectDescription, ProjectImage, ProjectLink, ProjectTitle} from "./ProjectStyle";

export type PropsType = {
    image: string
    title: string
    description: string
}


export const Project = (props: PropsType) => {
    return (
        <ProjectContainer >
            <ProjectImage backgroundImage={props.image}>
                <ProjectLink>See project</ProjectLink>
            </ProjectImage>
            <ProjectTitle>{props.title}</ProjectTitle>
            <ProjectDescription>{props.description}</ProjectDescription>
        </ProjectContainer>
    );
};

