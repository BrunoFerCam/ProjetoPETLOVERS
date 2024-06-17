import React, { useState } from "react";
import "../styles/listasCss.css";

export default function TopVendasServico(props) {
    const [showList, setShowList] = useState(false);

    const toggleList = () => {
        setShowList(!showList);
    };

    return (
        <div className="container-fluid">
            <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={toggleList}>{showList ? "Esconder Top Servicos" : "Mostrar Top Servicos"}</button>
            {showList && (
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Servico 1
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Servico 2
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Servico 3
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Servico 4
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Servico 5
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Top Servico 6
                    </a>
                </div>
            )}
        </div>
    );
}
