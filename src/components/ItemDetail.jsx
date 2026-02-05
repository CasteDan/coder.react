// components/ItemDetail.jsx
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const onAdd = (qty) => {
    // placeholder: luego lo conectás con carrito real
    alert(`Agregaste ${qty} unidad(es) de ${item.title}`);
  };

  return (
    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      <img
        src={item.pictureUrl}
        alt={item.title}
        style={{ width: "100%", borderRadius: 8 }}
      />

      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p><b>Precio:</b> ${item.price}</p>
        <p><b>Stock:</b> {item.stock}</p>

        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </section>
  );
};

export default ItemDetail;