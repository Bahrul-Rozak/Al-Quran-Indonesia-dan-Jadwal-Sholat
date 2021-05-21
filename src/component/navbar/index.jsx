import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                    AL-QURAN dan JADWAL SHOLAT
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars font" style={{ fontSize: "20px",color:"white" }}></i>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav ml-auto">
                            <Link className="nav-item nav-link active" to="/">
                                Home
                            </Link>
                            <Link className="nav-item nav-link active" to="/sholat">
                                Jadwal
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
