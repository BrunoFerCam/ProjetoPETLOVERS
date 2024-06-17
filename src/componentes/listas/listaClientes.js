import React, { useState } from "react";
import "../styles/listasCss.css";

export default function ListaCliente(props) {
    const [showList, setShowList] = useState(false);

    const toggleList = () => {
        setShowList(!showList);
    };

    return (
        <div className="container-fluid">
            <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={toggleList}>{showList ? "Esconder Clientes" : "Mostrar Clientes"}</button>
            {showList && (
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">
                        Cliente 1
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Cliente 2
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Cliente 3
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Cliente 4
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Cliente 5
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Cliente 6
                    </a>
                </div>
            )}
        </div>
    );
}
