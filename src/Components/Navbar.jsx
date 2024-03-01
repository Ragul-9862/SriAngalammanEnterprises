import React, { useState } from 'react';
import { FiAlignCenter, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [toggle, setToggle] = useState(false);
    const [activePage, setActivePage] = useState("Home");

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleSetActivePage = (page) => {
        setActivePage(page);
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button
                    className='navbar-toggler'
                    onClick={handleToggle}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={toggle ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                >
                    {toggle ? <FiX /> : <FiAlignCenter />}
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${activePage === "Home" ? "active" : ""}`}
                                onClick={() => handleSetActivePage("Home")}
                                href="#"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${activePage === "About Us" ? "active" : ""}`}
                                onClick={() => handleSetActivePage("About Us")}
                                href="#"
                            >
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${activePage === "Gallery" ? "active" : ""}`}
                                onClick={() => handleSetActivePage("Gallery")}
                                href="#"
                            >
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${activePage === "Product Features" ? "active" : ""}`}
                                onClick={() => handleSetActivePage("Product Features")}
                                href="#"
                            >
                                Product Features
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activePage === "Our Clients" ? "active" : ""}`}
                                onClick={() => handleSetActivePage("Our Clients")}
                                href="#"
                            >
                                Our Clients
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${activePage === "Contact" ? "active" : ""}`}
                                onClick={() => handleSetActivePage("Contact")}
                                href="#"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ml-auto d-none d-lg-block">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link call-us" href="#">Call Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
