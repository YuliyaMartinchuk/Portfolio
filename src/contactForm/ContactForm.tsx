import {
        ContactFormContainer,
     ContainerForm,
} from "./ContactFormStyle";
import React from "react";
import {Container} from "../common/styles/Container";
import {useLogin} from "../hooks/useLogin/useLogin";





export const ContactForm = () => {
    const {formik} = useLogin()
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
                                      />
                                {formik.touched.name && formik.errors.name && <div style={{color: 'red'}}>{formik.errors.name}</div> }
                                <h3> {"Email:"}</h3>
                                <input placeholder = "Let us know how to contact you back.."
                                       {...formik.getFieldProps("email")}/>
                                {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div> }
                                <h3> {"Leave your message:"}</h3>
                                <input placeholder = "What would you like to tell me..."
                                       {...formik.getFieldProps("message")}/>
                                {formik.touched.message && formik.errors.message && <div style={{color: 'red'}}>{formik.errors.message}</div> }
                                <button type={"submit"} >Send Message</button>
                            </form>
                        </ContainerForm>
                </ContactFormContainer>
                </div>
            </Container>

    );
};

