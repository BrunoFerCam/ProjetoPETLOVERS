import { Component, useState } from "react";

type Props = {
    tema: string;
};

export default function VendaServicos(props: Props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const tema = props.tema;
    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <div className="container-fluid">
            <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={handleExpand}>
                Registrar Venda de Serviço
            </button>
            {isExpanded && (
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do serviço" aria-label="Nome do serviço" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Quantidade" aria-label="Quantidade" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do cliente" aria-label="Nome do cliente" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="E-mail do cliente" aria-label="E-mail do cliente" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Registrar venda de serviço</button>
                    </div>
                </form>
            )}
        </div>
    );
}
