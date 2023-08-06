import React from 'react';
import { ProjectContainer} from "./ProjectStyle";


export type ProjectType = {
    image: string
    title: string
    description: string
}



export const Project = (props: ProjectType) => {
    return (
    <ProjectContainer id={"ProjectContainer"} >
        <div id={"ImageContainer"}>
            <img src={props.image}/>
            <a>See project</a>
        </div>

        <div id={"TextContainer"}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>

    </ProjectContainer>
    );
};

