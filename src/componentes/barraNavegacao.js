import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/barraNavCss.css";

class BarraNavegacao extends Component {
    constructor(props) {
        super(props);
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this);
    }

    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>;
        } else {
            let lista = this.props.botoes.map((valor) => (
                <li key={valor} className="nav-item">
                    <a className="nav-link" href="#" onClick={(e) => this.props.seletorView(valor, e)}>
                        {valor}
                    </a>
                </li>
            ));
            return lista;
        }
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <img src={require("../images/PETLOVERS3.png")} alt="PETLOVERS3" className="navbar-brand" />
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
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">{this.gerarListaBotoes()}</ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default BarraNavegacao;
