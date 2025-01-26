// Header Component

import { useEffect } from "react";

// Import Link from RRD for single page application navigation
import { Link } from "react-router-dom";

// Refactored Header from v1 of site to it's own component
// <a> replaced with <Link> with proper routing
export default function Header() {
  // useEffect in action for manipulating to DOM (sidenav), to make sure this takes effect AFTER the component renders
  useEffect(()=>{
    // Saves materializes .sidenav in elements var
    const elements = document.querySelector(".sidenav");
    // window.M = Materialize global object loaded from minified JS <script>
    // .Sidenav.init(elements) = A materialize function that initialized all sidenavs
    window.M.Sidenav.init(elements); // Initialize our sidenav from Materialize
  }, []); // No dependecies, so hook is ran once

  return (
    <header className="header">
      <nav className="nav-wrapper black">
        <div className="container">
          <Link to="/" className="brand-logo center">Code Over Uni</Link>
          {/* "role" tells screen readers the is a button (hamburger menu icon) */}
          <a role="button" className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><Link to='/' className="nav__link">Home</Link></li>
            <li><Link to='/products' className="nav__link">Products</Link></li>
            <li><Link to='/contact' className="nav__link">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-links">
        <li><Link to='/' className="nav__link">Home</Link></li>
        <li><Link to='/products' className="nav__link">Products</Link></li>
        <li><Link to='/contact' className="nav__link">Contact</Link></li>
      </ul>
    </header>
  )
};