import {Container} from "../common/styles/Container";
import React from "react";
import {
    FooterContacts,
    FooterContainer,
} from "./FooterStyle";
import {FooterContact, FooterContactType} from "./Contacts";
import linkedinIcon from "../assets/img/linkedinIcon.svg"
import telegramIcon from "../assets/img/telegramIcon.svg"
import githubIcon from "../assets/img/githubIcon.svg"


const contacts: FooterContactType[] = [
    {icon: linkedinIcon, href: 'https://www.linkedin.com/in/yuliya-martinchuk-70bb3126b'},
    {icon: telegramIcon, href: 'https://t.me/yuliya_martinchuk'},
    {icon: githubIcon, href: 'https://github.com/YuliyaMartinchuk'},
]

export const Footer = () => {
    return (
        <Container id={"Container"}>
            <FooterContainer id={"FooterContainer"}>
                <h2>You can find me here:</h2>
                <FooterContacts>
                    {contacts.map((contact, index) => {
                        return (
                            <FooterContact
                                key={index}
                                icon={contact.icon}
                                href={contact.href}
                            />
                        )
                    })}
                </FooterContacts>
                <span>© 2023</span>
            </FooterContainer>
        </Container>
    )
};

