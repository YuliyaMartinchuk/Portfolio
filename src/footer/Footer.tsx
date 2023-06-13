import {Container} from "../common/styles/Container";
import { image1, image2, image3, image4} from "./description/description";
import React from "react";
import {
    FooterContact,
    FooterContacts,
    FooterContainer,
    FooterTitle,
    FooterWrapper,
} from "./FooterStyle";


export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FooterContainer>
                    <FooterTitle>Yuliya Martinchuk</FooterTitle>
                    <FooterContacts>
                        <FooterContact image={image1}/>
                        <FooterContact image={image2}/>
                        <FooterContact image={image3}/>
                        <FooterContact image={image4}/>
                    </FooterContacts>
                </FooterContainer>
            </Container>
        </FooterWrapper>
    )
};

