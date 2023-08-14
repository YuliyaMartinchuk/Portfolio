import React, {FC} from 'react';
import {SkillContainer} from './SkillStyle';


export type SkillType = {
    image: string
    title: string
}

export const Skill: FC<SkillType> = ({image,title}) => {
    return (
        <SkillContainer id={"SkillContainer"}>
            <img src={image} />
            <p>{title}</p>
        </SkillContainer>
    );
};

