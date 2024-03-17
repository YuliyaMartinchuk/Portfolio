import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {ContactForm} from "./contactForm/ContactForm";
import {Footer} from "./footer/Footer";
import {Fade} from "react-awesome-reveal";
import {CommonToast} from "./common/CommonToast";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Fade>
                <Main/>
                <Skills/>
                <Projects/>
                <ContactForm/>
                <Footer/>
            </Fade>
            <CommonToast/>
        </div>
    );
}

export default App
