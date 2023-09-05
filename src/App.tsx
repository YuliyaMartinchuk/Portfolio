import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {ContactForm} from "./contactForm/ContactForm";
import {Footer} from "./footer/Footer";
import {Fade} from "react-awesome-reveal";


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
        </div>
    );
}

export default App
