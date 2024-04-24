import React from "react";
import { Link } from "react-router-dom";

function Header({ show }) {
  // Here we are applying the conditional styling based on the 'show' prop.
  // When 'show' is true, the header will slide into view, otherwise it will slide out.
  const headerStyle = {
    backgroundColor: "#f8f9fa",
    padding: "10px 20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "absolute", // Absolutely position the header within its parent
    top: "0", // Align the header to the top of the screen
    width: "100%", // Make the header full width
    zIndex: 5, // Ensure the header is above other content
    transform: show ? "translateY(0)" : "translateY(-100%)", // Animate the header sliding down or up
    transition: "transform 0.3s ease", // Smooth the transition animation
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li style={{ display: "inline", marginRight: "20px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li style={{ display: "inline", marginRight: "20px" }}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "black" }}
            >
              Products
            </Link>
          </li>
          <li style={{ display: "inline", marginRight: "20px" }}>
            <Link
              to="/admin"
              style={{ textDecoration: "none", color: "black" }}
            >
              Admin
            </Link>
          </li>
          <li style={{ display: "inline" }}>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              Login/Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
