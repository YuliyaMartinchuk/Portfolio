import React from 'react';
import {MainContainer} from "./MainStyle";
import {Container} from "../common/styles/Container";
import {image} from "./description/description";


export const Main = () => {
    return (
            <Container >
                <MainContainer id="intro" image={image}>
                    <div>
                        <p>HI there</p>
                        <p>  I am  <span>Yuliya Martinchuk</span></p>
                        <span>  FRONTEND DEVELOPER</span>
                    </div>
                    <img/>
                </MainContainer>
            </Container>

    );
};
