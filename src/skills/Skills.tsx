import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {description1, description2, description3} from "./description/description";

export const Skills = () => {
    return (
        <div className={style.skillsWrapper}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"Js"} description={description1}/>
                    <Skill title={"CSS"} description={description2}/>
                    <Skill title={"React"} description={description3}/>
                </div>
            </div>
        </div>
    );
};

