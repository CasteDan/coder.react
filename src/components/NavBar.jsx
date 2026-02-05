// src/components/NavBar.jsx
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  // Ajustá estas categorías a las reales de tus productos
  const categories = [
    { id: "remeras", label: "Remeras" },
    { id: "buzos", label: "Buzos" },
    { id: "calzado", label: "Calzado" },
  ];

  const linkStyle = ({ isActive }) => ({
    fontWeight: isActive ? "700" : "400",
    textDecoration: "none",
    color: "inherit",
  });

  return (
    <nav style={{ padding: 16, display: "flex", alignItems: "center", gap: 16 }}>
      {/* Logo/Home */}
      <h2 style={{ margin: 0 }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Mi Tienda
        </Link>
      </h2>

      <ul style={{ listStyle: "none", display: "flex", gap: 12, margin: 0, padding: 0 }}>
        <li>
          <NavLink to="/" style={linkStyle} end>
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" style={linkStyle}>
            Productos
          </NavLink>
        </li>

        {/* Categorías */}
        {categories.map((cat) => (
          <li key={cat.id}>
            <NavLink to={`/category/${cat.id}`} style={linkStyle}>
              {cat.label}
            </NavLink>
          </li>
        ))}

        <li>
          <NavLink to="/contact" style={linkStyle}>
            Contacto
          </NavLink>
        </li>
      </ul>

      <div style={{ marginLeft: "auto" }}>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
``