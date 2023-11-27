// Creaciones.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Creaciones.css';
import { useCreacionesContext } from '../contextCreaciones';

const Creaciones = () => {
    const { creaciones } = useCreacionesContext();

    return (
        <div className='creaciones-container'>
            <h1 className="creaciones-title">Creaciones</h1>
            <table className="creaciones-table">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {creaciones.map((creacion) => (
                        <tr key={creacion.id} className="creacion-row">
                            <td className="creacion-img-cell">
                                <Link to={`/creaciones/detalle/${creacion.id}`} className="creacion-link">
                                    <img src={creacion.foto} alt={creacion.titulo} className="creacion-img" />
                                </Link>
                            </td>
                            <td className="creacion-title-cell">
                                <Link to={`/creaciones/detalle/${creacion.id}`} className="creacion-link">
                                    <h2 className="creacion-title">{creacion.titulo}</h2>
                                </Link>
                            </td>
                            <td className="creacion-description-cell">
                                <p className="creacion-description">{creacion.descripcion}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Creaciones;
