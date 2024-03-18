import React, {FC} from 'react';
import {ProjectContainer} from "./ProjectStyle";
import { motion } from "framer-motion";
import {
    primaryColor
} from "../../common/styles/variables"
export type ProjectType = {
    image: string
    title: string
    description: string
    href: string
    gitHubHref: string
}

export const Project: FC<ProjectType> = ({
                                             image,
                                             title,
                                             description,
                                             href,
                                             gitHubHref
                                         }) => {
    return (
        <motion.div
            tabIndex={0}
            whileHover={{
                scale: 1.005,
                transition: { duration: 0.15 },
                boxShadow: `0 0px 12px ${primaryColor}`,
            }}
        >
        <ProjectContainer id={"ProjectContainer"}>
            <div id={"ImageContainer"}>
                <img src={image}/>
                <a href={href} target="_blank" className="project-link">See
                    project</a>
            </div>
            <div id={"TextContainer"}>
                <a href={href} target="_blank">
                    <h3>{title}</h3>
                </a>
                <p>{description}</p>
            </div>
        </ProjectContainer>
        </motion.div>
    );
};

