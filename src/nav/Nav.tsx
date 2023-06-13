import React from 'react';
import {NavElement, NavWrapper} from "./NavStyle";

export const Nav = () => {
    return (
        <NavWrapper >
          <NavElement href={""}>Main</NavElement>
          <NavElement href={""}>Skills</NavElement>
          <NavElement href={""}>Projects</NavElement>
          <NavElement href={""}>Contacts</NavElement>
        </NavWrapper>
    );
};

