import React, { useState } from "react";
import "../styles/listasCss.css";


export default function TopVendasProduto(props) {
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
