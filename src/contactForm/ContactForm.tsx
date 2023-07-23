import { Container } from "../common/styles/Container";
import {
    ButtonForm,
    ContactFormContainer, ContactFormMainTitle, ContactFormText,
    ContactFormTitle,
    ContactFormWrapper, ContainerForm,
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
                    <ContactFormTitle>CONTACT
                        <p>
                            ME
                        </p>
                    </ContactFormTitle>
                    <ContainerForm>

                   <Form>
                       <ContactFormText> {"Name:"}</ContactFormText>
                       <Field placeholder = "Write your name here.."/>
                       <ContactFormText> {"Email:"}</ContactFormText>
                       <Field placeholder = "Let us know how to contact you back.."/>
                       <ContactFormText> {"Leave your message:"}</ContactFormText>
                       <Field placeholder = "What would you like to tell me..."/>
                       <ButtonForm type={"submit"}>Send Message</ButtonForm>
                   </Form>
                    </ContainerForm>

                </ContactFormContainer>
            </Container>
        </ContactFormWrapper>

    );
};

