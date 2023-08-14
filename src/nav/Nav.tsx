import React from 'react';
import {NavContainer} from "./NavStyle";
import {Link} from 'react-scroll'

export const Nav = () => {
    return (
        <NavContainer id={"NavContainer"}>
          <Link to={"MainContainer"} spy={true} smooth={true} duration={500} offset={1}>Main</Link>
          <Link to={"SkillsContainer"} spy={true} smooth={true} duration={500} offset={1}>Skills</Link>
          <Link to={"ProjectsContainer"} spy={true} smooth={true} duration={500} offset={1}>Projects</Link>
          <Link to={"ContactFormContainer"} spy={true} smooth={true} duration={500} offset={-150}>Contacts</Link>
        </NavContainer>
    );
};

