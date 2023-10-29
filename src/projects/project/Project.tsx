import React, {FC} from 'react';
import { ProjectContainer} from "./ProjectStyle";

export type ProjectType = {
    image: string
    title: string
    description: string
    href: string
    gitHubHref: string
}

export const Project: FC<ProjectType> = ({image,title,description,href, gitHubHref}) => {
    return (
    <ProjectContainer id={"ProjectContainer"} >
        <div id={"ImageContainer"}>
            <img  src={image}/>
            <a href={href} target="_blank" className="project-link" >See project</a>
        </div>
        <div id={"TextContainer"}>
            <a href={href} target="_blank">
                <h3>{title}</h3>
            </a>
            <p>{description}</p>
        </div>
    </ProjectContainer>
    );
};

