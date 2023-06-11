import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {description1, description2, image1, image2} from "./description/description";

export const Projects = () => {
    return (
        <div className={style.projectsWrapper}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={"Project"} description={description1} image={image1}/>
                    <Project title={"Project"} description={description2} image={image2}/>
                </div>
            </div>
        </div>
    );
};

