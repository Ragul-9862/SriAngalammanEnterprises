import React, { useState, useEffect } from 'react';
import { FiAlignCenter, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [activePage, setActivePage] = useState("Home");
    const [navbarBg, setNavbarBg] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleSetActivePage = (page) => {
        setActivePage(page);
    }

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setNavbarBg(true);
            } else {
                setNavbarBg(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav id='Home' className={`navbar navbar-expand-lg fixed-top ${navbarBg ? 'bg-white' : ''}`}>
            <div className="container">
                <a className="navbar-brand" href="#Home">Navbar</a>
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
                                onClick={() => {
                                    handleSetActivePage("Home");
                                    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${activePage === "About" ? "active" : ""}`}
                                onClick={() => {
                                    handleSetActivePage("About");
                                    document.getElementById("About").scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${activePage === "Products" ? "active" : ""}`}
                                onClick={() => {
                                    handleSetActivePage("Products");
                                    document.getElementById("Products").scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                              Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${activePage === "Contact" ? "active" : ""}`}
                                onClick={() => {
                                    handleSetActivePage("Contact");
                                    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
                                }}
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
