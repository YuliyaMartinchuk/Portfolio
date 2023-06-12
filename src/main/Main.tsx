import React from 'react';
import {MainContainer, MainImage, MainText, MainWrapper} from "./MainStyle";
import {Container} from "../common/styles/Container";
import {image} from "./description/description";


export const Main = () => {
    return (
        <MainWrapper>
            <Container>
                <MainContainer>
                    <MainText>
                        <span>Hi There</span>
                        <h1>I am Yuliya Martinchuk</h1>
                        <p>FRONTEND DEVELOPER</p>
                    </MainText>
                    <MainImage image={image} />
                </MainContainer>
            </Container>
        </MainWrapper>
    );
};
