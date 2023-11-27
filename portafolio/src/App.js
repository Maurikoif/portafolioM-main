import ReactDOM from "react-dom/client";
import Home from './components/Home';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Creaciones from "./components/Creaciones";
import { CreacionesProvider } from './contextCreaciones.js';
import About from "./components/About.js";
import Favoritos from "./components/Favoritos.js";
import DetalleCreacion from './components/detalleCreacion'

function App() {
  return (
    <CreacionesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="favs" element={<Favoritos />} />
            <Route path="creaciones" element={<Creaciones />} />
            <Route path="info" element={<About />} />
            <Route path='creaciones/detalle/:id' element={<DetalleCreacion />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CreacionesProvider>
  );
}

export default App;
