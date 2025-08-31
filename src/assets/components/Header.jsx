import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <Container>
                <div className="d-flex justify-content-between align-items-center CustomNav">

                    {/* Logo */}
                    <Link to="/" className="DesktopLogo">
                        <img src={Logo} alt="Logo" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="d-lg-block d-none">
                        <ul className="nav">
                            <li className="nav-item"><Link to="/" className="active">Home</Link></li>
                            <li className="nav-item"><Link to="/about">About</Link></li>
                            <li className="nav-item"><Link to="/services">Services</Link></li>
                            <li className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
                            <li className="nav-item"><Link to="/blogs">Blogs</Link></li>
                            <li className="nav-item"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                    {/* Header Buttons */}
                    <div className="HeaderBtns d-flex align-items-center gap-2">
                        <Link to="/login" className="hover1">Get Started <i className="fa-solid fa-arrow-up"></i></Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        aria-label="Open menu"
                        className="menu-toggle d-lg-none d-flex hover1"
                        onClick={() => setIsOpen(true)}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    {/* Sidebar */}
                    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to="/" className="sidebar-logo">
                                <img src={Logo} alt="Logo" />
                            </Link>
                            <button
                                aria-label="Close menu"
                                className="close-btn hover1"
                                onClick={() => setIsOpen(false)}
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>

                        <nav className="sidebar-nav">
                            <ul className="sidebar-menu">
                                <li><Link to="/" className="sidebar-link active">Home</Link></li>
                                <li><Link to="/about" className="sidebar-link">About</Link></li>
                                <li><Link to="/services" className="sidebar-link">Services</Link></li>
                                <li><Link to="/portfolio" className="sidebar-link">Portfolio</Link></li>
                                <li><Link to="/blogs" className="sidebar-link">Blogs</Link></li>
                                <li><Link to="/contact" className="sidebar-link">Contact</Link></li>
                            </ul>
                        </nav>
                    </aside>

                    {/* Overlay for Sidebar */}
                    {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
                </div>
            </Container>
        </header>
    );
}

export default Header;
