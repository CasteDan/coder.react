// components/ItemDetailContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    getProductById(itemId)
      .then((data) => setItem(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div style={{ padding: 16 }}>
      {loading && <p>Cargando detalle...</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {!loading && !error && item && <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;