import React from 'react';
import {SkillContainer, SkillDescription, SkillImage, SkillTitle} from './SkillStyle';

export type PropsType = {
    image: string
    title: string
    description: string
}


export const Skill = (props: PropsType) => {
    return (
        <SkillContainer >
            <SkillImage backgroundImage={props.image} />
            <SkillTitle>{props.title}</SkillTitle>
            <SkillDescription>{props.description}</SkillDescription>
        </SkillContainer>
    );
};

