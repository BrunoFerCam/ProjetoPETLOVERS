import React, { useState } from "react";

export default function VendaProdutos(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const tema = props.tema;
    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <div className="container-fluid">
            <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={handleExpand}>
                Registrar Venda de Produto
            </button>
            {isExpanded && (
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do produto" aria-label="Nome do produto" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Quantidade" aria-label="Quantidade" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do cliente" aria-label="Nome do cliente" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <input type="text" className="form-control" placeholder="E-mail do cliente" aria-label="E-mail do cliente" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Registrar venda de produto</button>
                    </div>
                </form>
            )}
        </div>
    );
}
