import React from 'react';
import {ProjectContainer, ProjectDescription, ProjectImage} from "./ProjectStyle";
import {SubTitle} from "../../common/styles/common";

export type ProjectType = {
    image: string
    title: string
    description: string
}

export const Project = (props: ProjectType) => {
    return (
        <ProjectContainer >
            <ProjectImage backgroundImage={props.image}>
                <a>See project</a>
            </ProjectImage>
            <SubTitle>{props.title}</SubTitle>
            <ProjectDescription>{props.description}</ProjectDescription>
        </ProjectContainer>
    );
};

