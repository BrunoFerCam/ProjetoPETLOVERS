import { Component, useState } from "react";

type Props = {
    tema: string;
}

export default function FormularioCadastrarProdutos(props: Props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="container-fluid">
            <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={handleExpand}>
                Cadastrar Produto
            </button>
            {isExpanded && (
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Preço" aria-label="Preço" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }}>Cadastrar Produto</button>
                    </div>
                </form>
            )}
        </div>
    );
}