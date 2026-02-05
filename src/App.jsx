// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* Catálogo principal */}
        <Route
          path="/"
          element={<ItemListContainer mensaje="Bienvenidos a mi e-commerce" />}
        />

        {/* Catálogo filtrado por categoría */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer mensaje="Bienvenidos a mi e-commerce" />}
        />

        {/* Ruta “Productos” del menú (puede ser igual al home) */}
        <Route
          path="/products"
          element={<ItemListContainer mensaje="Bienvenidos a mi e-commerce" />}
        />

        {/* Detalle de producto */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        {/* Contacto */}
        <Route path="/contact" element={<Contacto />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
