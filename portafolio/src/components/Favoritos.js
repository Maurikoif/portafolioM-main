// Favoritos.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useCreacionesContext } from '../contextCreaciones';
import './Favoritos.css';

const Favoritos = () => {
    const { creaciones, favoritos } = useCreacionesContext();

    const favoritosData = creaciones.filter(creacion => favoritos.includes(creacion.id));

    return (
        <div className="favoritos-container">
            <h1 className="favoritos-title">Favoritos</h1>
            {favoritosData.length > 0 ? (
                <table className="favoritos-table">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favoritosData.map((creacion) => (
                            <tr key={creacion.id} className="creacion-favorita">
                                <td>
                                    <img src={creacion.foto} alt={creacion.titulo} className="creacion-favorita-img" />
                                </td>
                                <td className="creacion-favorita-title">{creacion.titulo}</td>
                                <td className="creacion-favorita-description">{creacion.descripcion}</td>
                                <td>
                                    <Link to={`/creaciones/detalle/${creacion.id}`} className="creacion-favorita-link">
                                        Ver Detalles
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="favoritos-empty">No hay favoritos.</p>
            )}
        </div>
    );
};

export default Favoritos;
