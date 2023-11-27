import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';


const CreacionesContext = createContext();

export const CreacionesProvider = ({ children }) => {
    const [creaciones, setCreaciones] = useState([]);
    const [favoritos, setFavoritos] = useState(() => {
        const storedFavoritos = localStorage.getItem('favoritos');
        return storedFavoritos ? JSON.parse(storedFavoritos) : [];
    });

    useEffect(() => {
        axios.get('creaciones.json')
            .then(response => {
                setCreaciones(response.data);
            })
            .catch(err => console.log(err));
    }, []);


    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }, [favoritos]);

    const addFav = (creacionId) => {
        setFavoritos((prevFavoritos) => {
            if (!prevFavoritos.includes(creacionId)) {
                return [...prevFavoritos, creacionId];
            }
            return prevFavoritos;
        });
    };

    const delFav = (creacionId) => {
        setFavoritos((prevFavoritos) => prevFavoritos.filter((id) => id !== creacionId));
    };

    const isFavorite = (creacionId) => favoritos.includes(creacionId);





    return (
        <CreacionesContext.Provider value={{ creaciones, favoritos, addFav, delFav, isFavorite }}>
            {children}
        </CreacionesContext.Provider>
    );
}

export const useCreacionesContext = () => {
    return useContext(CreacionesContext);
}