import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import Contacto from './Contacto';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container p-4 pb-0 mb-4" >
                <Contacto />
            </div>

            <div className="text-center p-3 copyright">
                © Mauricio Koifman.
            </div>
        </footer>
    );
};

export default Footer;
