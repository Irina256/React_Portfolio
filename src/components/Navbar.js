import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <div className="container-fluid">
          <Link
            offset={-110}
            smooth={true}
            to="home"
            className="navbar-brand"
            href="#"
          >
            <img className="logo" src={logo} alt="logo..." />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  offset={-110}
                  smooth={true}
                  to="home"
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  offset={-110}
                  smooth={true}
                  to="about"
                  className="nav-link"
                  href="#"
                >
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  offset={-110}
                  smooth={true}
                  to="experience"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  offset={-110}
                  smooth={true}
                  to="portfolio"
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Portfolio
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  offset={-110}
                  smooth={true}
                  to="contact"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
