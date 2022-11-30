import React from 'react';
import weath1 from '../../images/weath1.png';
import teditor1 from '../../images/teditor1.png';
import mern2 from '../../images/mern2.png';
import ecom1 from '../../images/ecom1.png';
import readme1 from '../../images/readme1.png';
export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <p>
                <h1>weatherApp</h1>
                <a href="https://github.com/FormulaXYZ/weather-app"><img src={weath1} className=" project" alt="weatherapp" /> </a>
                <div>
                    <h1>E-Commerce-Back-End</h1>
                    <a href="https://github.com/FormulaXYZ/E-Commerce-Back-End"><img src={ecom1} className=" project" alt="Ecommerceapp" /> </a>
                </div>
            </p>
            <h1>Text-Editor</h1>

            <a href="https://github.com/FormulaXYZ/-PWA-Text-Editor"><img src={teditor1} className=" project" alt="text-editorapp" /> </a>
            <div>
                <h1>google-book-Search</h1>
                <a href="https://github.com/FormulaXYZ/mern-Book-Search-Engine"><img src={mern2} className=" project" alt="Book-Searchapp" /> </a>
            </div>
            <div>
                <h1>ReadMe-Generator</h1>
                <a href="https://github.com/FormulaXYZ/README-Generator"><img src={readme1} className=" project" alt="Book-ReadMe-Generatorapp" /> </a>
            </div>
        </div >

    );
}

