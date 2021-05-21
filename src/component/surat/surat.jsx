import React from "react";
import axios from "axios";
import { Navbar } from "../navbar";
import "./surat.css";
import { Footer } from '../footer';

class Surat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        };
    }
    componentDidMount() {
        axios
            .get("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
            .then(res => {
                this.setState({
                    data: res.data,
                    loading: false
                });
            });
    }
    clickHandle = nomor => {
        this.props.history.push("/surat/" + nomor);
    };
    render() {
        return (
            <div className="body">
                <Navbar />
                <div className="jumbotron jumbotron-fluid" id="main">
                    <div className="container">
                        <h1 class="display-4">Daftar Surat</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10 info-panel">
                            <div className="row justify-content-center">
                                {this.state.loading ? (
                                    <div className="col-md-12 col-sm-12 d-flex justify-content-center">
                                        <div class="loader">
                                            <div class="loader--dot"></div>
                                            <div class="loader--dot"></div>
                                            <div class="loader--dot"></div>
                                            <div class="loader--dot"></div>
                                            <div class="loader--dot"></div>
                                            <div class="loader--dot"></div>
                                            <div class="loader--text"></div>
                                        </div>
                                    </div>
                                ) : (
                                    this.state.data.map((param, i) => {
                                        return (
                                            <div
                                                className="col-md-3 col-sm-12 info-surat"
                                                key={i}
                                                onClick={() =>
                                                    this.clickHandle(
                                                        param.nomor
                                                    )
                                                }
                                            >
                                                <h4>
                                                    {param.nomor}. {param.nama}
                                                </h4>
                                                <p>{param.arti}</p>
                                                <audio controls>
                                                    <source src={param.audio} type="audio/mp3"/>
                                                </audio>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Surat;
