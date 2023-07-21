import React from 'react';
import {DescriptionContainer, ImageContainer, ProjectContainer, projectStyle} from "./ProjectStyle";


export type ProjectType = {
    image: string
    title: string
    description: string
}



export const Project = (props: ProjectType) => {
    return (
    <ProjectContainer id={"ProjectContainer"} style={projectStyle}>
        <ImageContainer>
            <img src={props.image}/>
            <a>See project</a>
        </ImageContainer>

        <DescriptionContainer>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </DescriptionContainer>

    </ProjectContainer>
    );
};

