import React from 'react';
import {NavContainer} from "./NavStyle";
import {Link} from 'react-scroll'

export const Nav = () => {
    return (
        <NavContainer id={"NavContainer"}>
          <Link to={"MainContainer"} spy={true} smooth={true} duration={500} offset={0} activeClass={"active"} >Main</Link>
          <Link to={"SkillsContainer"}  spy={true} smooth={true} duration={500} offset={0} activeClass={"active"} >Skills</Link>
          <Link to={"ProjectsContainer"} spy={true} smooth={true} duration={500} offset={0} activeClass={"active"} >Projects</Link>
          <Link to={"ContactFormContainer"} spy={true} smooth={true} duration={500} offset={-100} activeClass={"active"} >Contacts</Link>
        </NavContainer>
    );
};

