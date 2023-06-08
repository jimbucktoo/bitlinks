import React from "react";
import logo from "../assets/logo.png";
import "../styles/App.css";

function Navbar() {
    return (
        <div className="Navbar">
            <nav className="uiNavbar navbar navbar-expand-lg">
                <a className="uiNavLogo navbar-brand" href="/">
                    <img className="nav-logo" src={logo} alt="Logo"></img>
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="uiNavLinks nav-link" href="https://github.com/jimbucktoo/bitlinks/">
                                Github <span className="sr-only">(current)</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
