// components/ItemCount.jsx
import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const dec = () => setCount((c) => Math.max(1, c - 1));
  const inc = () => setCount((c) => Math.min(stock, c + 1));

  return (
    <div style={{ marginTop: 12 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button onClick={dec} disabled={count <= 1}>-</button>
        <span style={{ minWidth: 24, textAlign: "center" }}>{count}</span>
        <button onClick={inc} disabled={count >= stock}>+</button>
      </div>

      <button
        style={{ marginTop: 10 }}
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>

      {stock === 0 && <p style={{ color: "crimson" }}>Sin stock</p>}
    </div>
  );
};

export default ItemCount;