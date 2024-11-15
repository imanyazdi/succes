import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './layout.css';

export default function Layout() {
    const location = useLocation();
    const ishome = location.pathname === "/";
    const pageTransition = {
        initial: { opacity: 0, y: -70 ,},
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20, }
    };

    return (
        <div className="cotainer-box">
            <div className="contaner">
                <nav className={`navbar navbar-expand-md navbar-dark ${ishome ? "home" : "navbarr"}`}>
                    <div className="container-fluid">
                        <NavLink to="/" className="navbar-brand">
                            <h1>Emily Jones</h1>
                            {ishome && <Outlet />}
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className={`navbar-nav ${ishome?"":"ms-auto"}`}>
                                <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/resume">Resume</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/services">Services</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {!ishome && 
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageTransition}
                        transition={{ duration: .6 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            }
        </div>
    );
}
