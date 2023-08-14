import React from 'react';
import {Skill, SkillType} from "./skill/Skill";
import {Container} from "../common/styles/Container";
import {SkillsContainer} from "./SkillsStyle";
import ReactIcon from "../assets/img/reactIcon.svg"
import JavaScriptIcon from "../assets/img/jsIcon.svg"
import TypeScriptIcon from "../assets/img/typescriptIcon.svg"
import ReduxIcon from "../assets/img/reduxIcon.svg"
import HTMLIcon from "../assets/img/html5Icon.svg"
import CSSIcon from "../assets/img/css3Icon.svg"
import MaterialUIIcon from "../assets/img/materialIcon.svg"
import StyledComponentsIcon from "../assets/img/styledComponentsIcon.svg"
import SASSIcon from "../assets/img/sassIcon.svg"
import StorybookIcon from "../assets/img/storybookIcon.svg"
import GitIcon from "../assets/img/gitIcon.svg"


const skill: SkillType[] = [
    {image: ReactIcon, title: 'React'},
    {image: JavaScriptIcon, title: 'JavaScript'},
    {image: TypeScriptIcon, title: 'TypeScript'},
    {image: ReduxIcon, title: 'Redux Toolkit'},
    {image: HTMLIcon, title: 'HTML'},
    {image: CSSIcon, title: 'CSS'},
    {image: MaterialUIIcon, title: 'Material UI'},
    {image: StyledComponentsIcon, title: 'Styled Components'},
    {image: SASSIcon, title: 'SASS'},
    {image: StorybookIcon, title: 'Storybook'},
    {image: GitIcon, title: 'Git'},
]

export const Skills = () => {
    return (

        <Container id={"Container"}>
            <SkillsContainer id={"SkillsContainer"}>
                <h2>Skills</h2>
                <div id={"Skills"}>
                    {skill.map((skill, index) => (
                        <Skill
                            key={index}
                            image={skill.image}
                            title={skill.title}
                        />
                    ))}
                </div>
            </SkillsContainer>
        </Container>


    );
};

