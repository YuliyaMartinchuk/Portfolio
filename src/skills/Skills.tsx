import React from 'react';
import {Skill} from "./skill/Skill";
import {description1, description2, description3, image1, image2, image3} from "./description/description";
import {Container} from "../common/styles/Container";
import {SkillsContainer, SkillsElement, SkillsElements, SkillsTitle, SkillsWrapper} from "./SkillsStyle";


export const Skills = () => {
    return (
        <SkillsWrapper>
            <Container>
                <SkillsContainer>
                    <SkillsTitle>Skills</SkillsTitle>
                    <SkillsElements>
                        <SkillsElement>
                            <Skill title={"Js"} description={description1} image={image1}/>
                        </SkillsElement>
                        <SkillsElement>
                            <Skill title={"CSS"} description={description2} image={image2}/>
                        </SkillsElement>
                        <SkillsElement>
                            <Skill title={"React"} description={description3} image={image3}/>
                        </SkillsElement>
                    </SkillsElements>
                </SkillsContainer>
            </Container>
        </SkillsWrapper>

    );
};

