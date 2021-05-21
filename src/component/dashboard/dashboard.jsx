import React from "react";
import { Link } from 'react-router-dom';
import './App.css';
import { Footer } from '../footer';
const Dashboard = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center fixed-top">
                <a className="navbar-brand text-center" href="#">
                    AL-QURAN dan JADWAL SHOLAT
                </a>
            </nav>
            <div className="jumbotron jumbotron-fluid" id="main">
                <div className="container">
                    <h1 className="display-4">Al-Quran</h1>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 info-panel">
                        <div className="row">
                            <div className="col-lg">
                                <i class="fas fa-quran float-left mr-4" style={{ fontSize: "100px" }}></i>
                                <h3>BACA AL-QURAN</h3>
                                <h5>114 surat</h5>
                                <Link to="surat" className="btn btn-primary tombol">GO</Link>
                            </div>
                            <div className="col-lg">
                                <i class="fas fa-clock float-left mr-4" style={{ fontSize: "100px" }}></i>
                                <h3>JADWAL SHOLAT</h3>
                                <h5>jadwal sholat kota di seluruh indonesia</h5>
                                <Link to="/sholat" className="btn btn-primary tombol">GO</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
