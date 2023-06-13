import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {ContactForm} from "./contactForm/ContactForm";
import {Footer} from "./footer/Footer";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <ContactForm/>
           <Footer/>
        </div>
    );
}

export default App
