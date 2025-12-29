import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO (UNCHANGED) */}
        <Link to="/" className="logo">
          <img src={logo} alt="Hotel Dream Inn Khajuraho Logo" />
          <span>Hotel Dream Inn Khajuraho</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/rooms">Rooms</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/nearby-attractions">Nearby</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* BOOK NOW */}
        <a
          href="https://www.booking.com/hotel/in/dream-inn-khajuraho.en-gb.html"
          target="_blank"
          rel="noopener noreferrer"
          className="book-now-btn"
        >
          Book Now
        </a>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <nav className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/rooms" onClick={closeMenu}>
          Rooms
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/gallery" onClick={closeMenu}>
          Gallery
        </NavLink>
        <NavLink to="/nearby-attractions" onClick={closeMenu}>
          Nearby
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        <a
          href="https://www.booking.com/hotel/in/dream-inn-khajuraho.en-gb.html"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-book-btn"
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
