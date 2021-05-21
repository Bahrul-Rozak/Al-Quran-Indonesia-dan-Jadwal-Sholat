import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Footer } from '../footer';

export class Sholat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            date: "",
            data: [],
            search: "",
            dataJadwal: {},
            loadingJadwal: true
        };
    }
    componentDidMount() {
        axios
            .get("https://api.banghasan.com/sholat/format/json/kota")
            .then(res => {
                this.setState({
                    loading: false,
                    data: res.data.kota
                });
            })
            .catch(err => {
                this.setState({
                    loading: false
                });
            });
        const date = new Date();
        const day = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();
        const dating = `${year}-0${month}-0${day}`;
        this.setState({
            date: dating
        })
    }
    handleClick = (kode) => {
        console.log(kode)
        const date = this.state.date
        axios.get("https://api.banghasan.com/sholat/format/json/jadwal/kota/"+kode+"/tanggal/"+ date)
            .then(res => {
                this.setState({
                    dataJadwal: res.data.jadwal.data,
                    loadingJadwal: false
                })
            })
    }
    handleSearch = e => {
        this.setState({
            search: e.target.value
        });
    };
    render() {
        const { data, loading } = this.state;
        const filtered = data.filter(data =>
            data.nama.toLowerCase().includes(this.state.search.toLowerCase())
        );
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
                                <Link
                                    className="nav-item nav-link active"
                                    to="/"
                                >
                                    Home
                                </Link>
                                <Link
                                    className="nav-item nav-link active"
                                    to="/surat"
                                >
                                    Surat
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="jumbotron jumbotron-fluid" id="main">
                    <div className="container">
                        <h1 className="display-4">Jadwal Sholat</h1>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10 info-panel">
                            <div className="row justify-content-center">
                                <div class="form-group col-md-10 col-sm-12 my-4">
                                    <label
                                        htmlFor=""
                                        style={{ color: "black" }}
                                    >
                                        Search Kota
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={this.handleSearch}
                                        placeholder="search jadwal sholat"
                                    />
                                </div>
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
                                    filtered.map((param, index) => {
                                        return (
                                            <div key={param.id} className="col-md-3 col-sm-12 info-surat text-center">
                                                <DetailSholat nama={param.nama} loading={this.state.loadingJadwal} onClick={(kode) => this.handleClick(param.id)} jadwal={this.state.dataJadwal}/>
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

export const DetailSholat = ({nama,onClick,jadwal,loading}) => {
    return (
        <div>
            <h5 data-toggle="modal" data-target="#exampleModal" onClick={onClick}>
                {nama}
            </h5>
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                JADWAL SHOLAT
                            </h5>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="row justify-content-center">
                                {
                                    loading ? 
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
                                    :
                                <div className="col-10">
                                    <h5>Subuh   : {jadwal.subuh}</h5>
                                    <h5>Imsak   : {jadwal.imsak}</h5>
                                    <h5>Dhuha   : {jadwal.dhuha}</h5>
                                    <h5>Terbit  : {jadwal.terbit}</h5>
                                    <h5>Dzuhur  : {jadwal.dzuhur}</h5>
                                    <h5>Ashar   : {jadwal.ashar}</h5>
                                    <h5>Maghrib : {jadwal.maghrib}</h5>
                                    <h5>Isya    : {jadwal.isya}</h5>
                                </div>
                                }
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" class="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
