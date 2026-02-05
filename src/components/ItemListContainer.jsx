// components/ItemListContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/productService";
import ItemList from "./ItemList";

const ItemListContainer = ({ mensaje }) => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    getProducts(categoryId)
      .then((data) => setItems(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [categoryId]); // ✅ clave para que actualice al navegar

  return (
    <div style={{ padding: 16 }}>
      <h1>{mensaje}</h1>
      {categoryId && <h2 style={{ marginTop: 8 }}>Categoría: {categoryId}</h2>}

      {loading && <p>Cargando productos...</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      {!loading && !error && <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;