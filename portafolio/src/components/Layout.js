import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css"; // Asegúrate de crear un archivo Layout.css para los estilos.
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">
                            Home
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/info" className="navbar-link">
                            Info
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/creaciones" className="navbar-link">
                            Creaciones
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/favs" className="navbar-link">
                            Favoritos
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;