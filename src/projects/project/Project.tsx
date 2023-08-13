import React, {FC} from 'react';
import { ProjectContainer} from "./ProjectStyle";
import {ContactsType} from "../../header/Contacts";


export type ProjectType = {
    image: string
    title: string
    description: string
}



export const Project: FC<ProjectType> = ({image,title,description}) => {
    return (
    <ProjectContainer id={"ProjectContainer"} >
        <div id={"ImageContainer"}>
            <img src={image}/>
            <a>See project</a>
        </div>

        <div id={"TextContainer"}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>

    </ProjectContainer>
    );
};

