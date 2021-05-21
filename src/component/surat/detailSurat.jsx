import React from "react";
import axios from "axios";
import { Navbar } from "../navbar";
import { Footer } from '../footer';

class DetailSurat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        };
    }
    componentDidMount() {
        const nomor = this.props.match.params.nomor;
        axios
            .get(
                "https://al-quran-8d642.firebaseio.com/surat/" +
                    nomor +
                    ".json?print=pretty"
            )
            .then(res => {
                this.setState({
                    data: res.data,
                    loading: false
                });
            });
    }
    render() {
        return (
            <div className="body">
                <Navbar />
                <div className="jumbotron jumbotron-fluid" id="main">
                    <div className="container">
                        <h1 className="display-4">Daftar Surat</h1>
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
                                                key={i}
                                                className="col-md-10 col-sm-10 mb-5 pb-4"
                                            >
                                                <h2 className="float-right">
                                                    {param.ar}
                                                </h2>
                                                <br />
                                                <h5>
                                                    {param.nomor}. {param.id}
                                                </h5>
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

export default DetailSurat;
