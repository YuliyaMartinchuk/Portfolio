import React from 'react';
import style from './Skill.module.css'

export type PropsType = {
    title: string
    description: string
}


export const Skill = (props: PropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>

        </div>
    )
        ;
};

