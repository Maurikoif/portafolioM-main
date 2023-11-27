import React from 'react';
import { useCreacionesContext } from '../contextCreaciones';
import './Home.css';  // Cambié el nombre del archivo CSS

const Home = () => {
    const { creaciones } = useCreacionesContext();
    if (!Array.isArray(creaciones)) {
        console.log("errorrrrr", creaciones);
        return null;
    }

    return (
        <>
            <div className="main-header">
                <h1>Portafolio</h1>
                <h2>/Mauricio Koifman.jsx</h2>
            </div>
            <div className='creations-section'>
                <h1>Descubre Mis Creaciones</h1>
                <div className='creations-container'>
                    {creaciones.map((creacion) => (
                        <div key={creacion.titulo} className="creation-card">
                            <img src={creacion.foto} alt={creacion.titulo} />
                            <div className="card-details">
                                <h2>{creacion.titulo}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
