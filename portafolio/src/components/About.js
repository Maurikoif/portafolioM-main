// About.js

import React from 'react';
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import Typography from '@mui/material/Typography';
import './About.css';

const About = () => {
    return (
        <div className="info-container">
            <div className="info-content">
                <div className="info-left">
                    <h1>Mauricio Koifman.</h1>
                </div>
                <div className="info-right">
                    <Typography variant="body1" component="p" color="textSecondary">
                        ¡Saludos! Soy Mauricio Koifman, un entusiasta creador de soluciones tecnológicas. Mi fascinación por el desarrollo de software se combina con una sólida experiencia en diversas tecnologías. Me apasiona la exploración constante de ideas innovadoras para abordar los desafíos del desarrollo. Siempre estoy en busca de nuevas oportunidades para perfeccionar mis habilidades y contribuir de manera significativa al mundo tecnológico.
                    </Typography>
                </div>
            </div>

            <div className="tech-stack">
                <h2>Tecnologías y Lenguajes</h2>
                <div className="tech-icons">
                    <JavascriptIcon />
                    <HtmlIcon />
                    <CssIcon />
                    <CodeIcon />
                </div>
            </div>
        </div>
    );
};

export default About;
