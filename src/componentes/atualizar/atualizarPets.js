import React, { useState } from 'react';
export default function FormularioAtualizarPets(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="container-fluid">
            <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={handleExpand}>
                Atualizar Pet
            </button>
            {isExpanded && (
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }}>Atualizar Pet</button>
                    </div>
                </form>
            )}
        </div>
    );
}