import { Container } from "../common/styles/Container";
import {
    ButtonForm,
    ContactFormContainer, ContactFormMainTitle, ContactFormText,
    ContactFormTitle,
    ContactFormWrapper,
     Field,
    Form,
} from "./ContactFormStyle";
import React from "react";


export const ContactForm = () => {
    return (
        <ContactFormWrapper>
            <Container>
                <ContactFormContainer>
                    <ContactFormMainTitle>Contacts</ContactFormMainTitle>
                   <Form>
                       <ContactFormTitle>CONTACT ME</ContactFormTitle>
                       <ContactFormText> {"Name:"}</ContactFormText>
                       <Field placeholder = "Write your name here.."/>
                       <ContactFormText> {"Email:"}</ContactFormText>
                       <Field placeholder = "Let us know how to contact you back.."/>
                       <ContactFormText> {"Leave your message:"}</ContactFormText>
                       <Field placeholder = "What would you like to tell me..."/>
                       <ButtonForm>Send Message</ButtonForm>
                   </Form>

                </ContactFormContainer>
            </Container>
        </ContactFormWrapper>

    );
};

