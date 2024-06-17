/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, useState } from "react";
import "../styles/listasCss.css";

type Props = {
    tema: string;
};

export default function TopVendasProduto(props: Props) {
    const [showList, setShowList] = useState(false);

    const toggleList = () => {
        setShowList(!showList);
    };

    return (
        <div className="container-fluid">
            <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={toggleList}>{showList ? "Esconder Top Produtos" : "Mostrar Top Produtos"}</button>
            {showList && (
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Produto 1
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Produto 2
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Produto 3
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Produto 4
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Produto 5
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Produto 6
                    </a>
                </div>
            )}
        </div>
    );
}