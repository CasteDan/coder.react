// components/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ padding: 16 }}>
      <h1>404</h1>
      <p>La ruta que intentaste visitar no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;