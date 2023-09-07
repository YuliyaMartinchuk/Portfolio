import {
        ContactFormContainer,
     ContainerForm,
} from "./ContactFormStyle";
import React from "react";
import {useFormik} from "formik";
import {contactFormApi, ContactFormValue} from "../api/contactFormApi";
import {Container} from "../common/styles/Container";



const initialValues: ContactFormValue = {
    name: '',
    email: '',
    message: ''
};

export const ContactForm = () => {
    const formik = useFormik({
        initialValues,
        validate: (values) => {
            const errors: ContactFormValue = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.name) {
                errors.name = 'Required';
            } else if (values.name?.length < 2) {
                errors.name = 'Please add more symbols';
            }
            if (!values.message) {
                errors.message = 'Required';
            }

            return errors;
        },
        onSubmit:  async (values) => await contactFormApi.sendFormData(values)
    });
    return (
            <Container id={"Container"}>
                <div style={{paddingTop:"100px"}}>
                <ContactFormContainer id={"ContactFormContainer"}>
                        <h2>Contacts</h2>
                        <p>CONTACT
                            <span>
                              ME
                        </span>
                        </p>
                        <ContainerForm id={"ContainerForm"}>
                            <form onSubmit={formik.handleSubmit}>
                                <h3> {"Name:"}</h3>
                                <input placeholder = "Write your name here.."
                                       {...formik.getFieldProps("name")}/>
                                {formik.touched.name && formik.errors.name && <div style={{color: 'red'}}>{formik.errors.name}</div> }
                                <h3> {"Email:"}</h3>
                                <input placeholder = "Let us know how to contact you back.."
                                       {...formik.getFieldProps("email")}/>
                                {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div> }
                                <h3> {"Leave your message:"}</h3>
                                <input placeholder = "What would you like to tell me..."
                                       {...formik.getFieldProps("message")}/>
                                {formik.touched.message && formik.errors.message && <div style={{color: 'red'}}>{formik.errors.message}</div> }
                                <button type={"submit"}>Send Message</button>
                            </form>
                        </ContainerForm>
                </ContactFormContainer>
                </div>
            </Container>

    );
};

