import React, {useState} from 'react';
import {Link} from 'react-scroll'
import burgerIcon from "../../assets/img/burgerIcon.svg"
import {BurgerNavContainer} from "./BurgerNavStyle";

export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <BurgerNavContainer id={"NavContainer"}>
            <div className={`${menuIsOpen ? "burgerNavItems show" : "burgerNavItems"}`}>
          <Link to={"MainContainer"} spy={true} smooth={true} duration={500} offset={0} activeClass={"active"} >Main</Link>
          <Link to={"SkillsContainer"}  spy={true} smooth={true} duration={500} offset={0} activeClass={"active"} >Skills</Link>
          <Link to={"ProjectsContainer"} spy={true} smooth={true} duration={500} offset={0} activeClass={"active"} >Projects</Link>
          <Link to={"ContactFormContainer"} spy={true} smooth={true} duration={500} offset={-100} activeClass={"active"} >Contacts</Link>
            </div>
            <div  onClick={onBurgerBtnClick}>
                <img src={burgerIcon} alt="burger" />
            </div>
        </BurgerNavContainer>
    );
};

