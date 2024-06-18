/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, useState } from "react";
import "../styles/listasCss.css";

type Props = {
    tema: string;
};

export default function TopVendasClienteValor(props: Props) {
    const [showList, setShowList] = useState(false);

    const toggleList = () => {
        setShowList(!showList);
    };

    return (
        <div className="container-fluid">
            <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={toggleList}>{showList ? "Esconder Top Clientes por Valor" : "Mostrar Top Clientes por Valor"}</button>
            {showList && (
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Cliente 1
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Cliente 2
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Cliente 3
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Cliente 4
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Cliente 5
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Cliente 6
                    </a>
                </div>
            )}
        </div>
    );
}