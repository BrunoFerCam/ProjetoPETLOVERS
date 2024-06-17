import React, { useState } from "react";
import "../styles/listasCss.css";


export default function ListaPets(props) {
    const [showList, setShowList] = useState(false);

    const toggleList = () => {
        setShowList(!showList);
    };

    return (
        <div className="container-fluid">
            <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={toggleList}>{showList ? "Esconder Pets" : "Mostrar Pets"}</button>
            {showList && (
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">
                        Pet 1
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Pet 2
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Pet 3
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Pet 4
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Pet 5
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Pet 6
                    </a>
                </div>
            )}
        </div>
    );
}
