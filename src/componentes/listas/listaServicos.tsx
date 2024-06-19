/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import axios from 'axios';

type Props = {
    tema: string;
};

export default function ListaProduto(props: Props) {
    const red = "#fc6464";
    const tema = props.tema;
    const green = "#00ff00";
    const [servicos, setServicos] = useState<Array<{
        id: number;
        nome_servico: string;
        desc_servico: string;
        vendas: number;
        valor: number;
    }>>([]);
    const [nome_servico, setNomeServico] = useState('');
    const [desc_servico, setDescServico] = useState('');
    const [valor, setValor] = useState('');
    const [cerror, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/servicos')
            .then((response) => {
                setServicos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const deletar = (id: number) => {
        axios.delete(`http://localhost:3001/servicos/${id}`)
            .then((response) => {
                updateServicos();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleUpdate = (id: number) => {
        if (nome_servico && desc_servico && valor) {
            axios.put(`http://localhost:3001/servicosEditar/${id}`, { nome_servico, desc_servico, valor })
                .then(() => {
                    updateServicos();
                    setNomeServico('');
                    setDescServico('');
                    setValor('');
                })
                .catch((error) => {
                    console.error(error);
                });
        } else if (nome_servico === '' || desc_servico === '' || valor === '') {
            setError('Preencha todos os campos, caso não for editar apenas coloque o mesmo valor anterior!');
        }
    };

    const updateServicos = () => {
        axios.get('http://localhost:3001/servicos')
            .then((response) => {
                setServicos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="container-fluid">
            <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={handleExpand}>
                Exibir Servicos
            </button>
            {isExpanded && (
                <div className="list-group">
                    {servicos.map((servico, index) => (
                        <div key={index} className="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapseOne${index}`}
                                        aria-expanded="true"
                                        aria-controls={`collapseOne${index}`}
                                    >
                                        {servico.nome_servico}
                                    </button>
                                </h2>
                                <div
                                    id={`collapseOne${index}`}
                                    className="accordion-collapse collapse"
                                >
                                    <div className="accordion-body">
                                        <div className="input-group-3">
                                            <label className="input-group mb-1">Nome servico:</label>
                                            <input type="text" className="form-control" value={nome_servico} onChange={(e) => setNomeServico(e.target.value)} placeholder={servico.nome_servico} aria-label="Nome servico" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group-3">
                                            <label className="input-group mb-1">Descrição:</label>
                                            <input type="text" className="form-control" value={desc_servico} onChange={(e) => setDescServico(e.target.value)} placeholder={servico.desc_servico} aria-label="Nome servico" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group-3">
                                            <label className="input-group mb-1">Valor:</label>
                                            <input type="number" className="form-control" value={valor} onChange={(e) => setValor(e.target.value)} placeholder={`R$ ${servico.valor.toFixed(2)}`} aria-label="Raça" aria-describedby="basic-addon1" />
                                        </div>
                                        <br />
                                        <div className="input-group mb-3">
                                            <button className="input-group-text" onClick={() => deletar(servico.id)} style={{ background: red }}>Deletar</button>
                                            <button className="input-group-text" onClick={() => handleUpdate(servico.id)} style={{ background: green }}>Editar</button>
                                        </div>
                                        {cerror && <div className="alert alert-danger" role="alert" style={{ color: 'red' }}>{cerror}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}