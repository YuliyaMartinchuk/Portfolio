import { Container } from "../common/styles/Container";
import {
        ContactFormContainer,
     ContainerForm,
} from "./ContactFormStyle";
import React from "react";


export const ContactForm = () => {
    return (
            <Container id={"Container"}>
                <ContactFormContainer id={"ContactFormContainer"}>
                        <h2>Contacts</h2>
                        <p>CONTACT
                            <span>
                              ME
                        </span>
                        </p>
                        <ContainerForm id={"ContainerForm"}>
                            <form>
                                <h3> {"Name:"}</h3>
                                <input placeholder = "Write your name here.."/>
                                <h3> {"Email:"}</h3>
                                <input placeholder = "Let us know how to contact you back.."/>
                                <h3> {"Leave your message:"}</h3>
                                <input placeholder = "What would you like to tell me..."/>
                                <button type={"submit"}>Send Message</button>
                            </form>
                        </ContainerForm>
                </ContactFormContainer>
            </Container>

    );
};

