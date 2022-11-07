import React from 'react';
import image from '../../../src/images/react1.png';
export default function About() {
    return (

        <div>
            <h1>About me</h1>
            <p>

                Thomas Woldetsadik

            </p>
            <img src={image} alt='logo' />
        </div>
    );
}
