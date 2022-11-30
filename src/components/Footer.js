import React from 'react';
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
function Footer() {
    return (
        <footer className='footer'>
            <div className='content has-text-centered'>
                <div>
                    <strong>My Portfolio</strong> {' '}
                    <hr />
                    <a href='https://github.com/formulaXYZ' target='_blank' rel='noreferrer'>
                        <BsGithub />
                    </a>{' '}
                    {' '}{' '}
                    <a href='https://www.linkedin.com/in/thomas-woldetsadik-06b057241' target='_blank' rel='noreferrer'>
                        <BsLinkedin />
                    </a>{' '}
                    {' '}{''}
                    <a href='/https://twitter.com/w90886764/' target='_blank'><BsTwitter /></a>
                </div>

            </div>
        </footer>
    );
}
export default Footer