import React from 'react';
import {Nav} from "./nav/Nav";
import {HeaderContainer} from "./HeaderStyle";
import {BurgerNav} from "./burgerNav/BurgerNav";

export const Header = () => {
    return (
        <HeaderContainer >
            <Nav/>
            <BurgerNav/>
        </HeaderContainer>
    );
};

