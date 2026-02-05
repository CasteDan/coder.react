// src/components/ItemCard.jsx
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <article style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12 }}>
      <img
        src={item.pictureUrl}
        alt={item.title}
        style={{ width: "100%", borderRadius: 6, marginBottom: 8 }}
      />
      <h3 style={{ margin: "8px 0" }}>{item.title}</h3>
      <p style={{ margin: "6px 0" }}>${item.price}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </article>
  );
};

export default ItemCard;