
import React from "react";
import './Contacto.css'

const Contacto = () => {
    return (
        <div className="contacto-container">
            <h2>Contacto</h2>
            <form className="contacto-form">
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje"></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contacto;
