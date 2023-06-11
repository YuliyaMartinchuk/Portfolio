import React from 'react';
import style from './Project.module.css'

export type PropsType = {
    image: string
    title: string
    description: string
}


export const Project = (props: PropsType) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <img src="" alt=""/>
            </div>
            <div className={style.link}>
                <a>See project</a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

