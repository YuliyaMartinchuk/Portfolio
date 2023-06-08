import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>

        </div>
    );
}

export default App
