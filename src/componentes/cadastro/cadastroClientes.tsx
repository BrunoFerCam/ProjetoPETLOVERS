import { Component, useState } from "react";
import axios from "axios";

type Props = {
    tema: string;
}

export default function FormularioCadastrarCliente(props: Props) {
    let tema = props.tema;
    const [isExpanded, setIsExpanded] = useState(false);
    const [nome, setNome] = useState("");
    const [nomeSocial, setNomeSocial] = useState("");
    const [cpf, setCpf] = useState("");
    const [rgs, setRgs] = useState<string[]>([]);
    const [telefones, setTelefones] = useState<string[]>([]);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    const handleCadastrar = () => {
        const cliente = {
            nome,
            nomeSocial,
            cpf,
            rgs,
            dataCadastro: new Date(),
            telefones
        };

        axios.post("/api/clientes", cliente)
            .then(response => {
                // Handle success
                console.log(response.data);
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    }

    return (
        <div className="container-fluid">
            <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={handleExpand}>
                Cadastrar Cliente
            </button>
            {isExpanded && (
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome Social" aria-label="Nome Social" aria-describedby="basic-addon1" value={nomeSocial} onChange={e => setNomeSocial(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" value={cpf} onChange={e => setCpf(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" value={rgs.join(",")} onChange={e => setRgs(e.target.value.split(","))} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" value={telefones.join(",")} onChange={e => setTelefones(e.target.value.split(","))} />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={handleCadastrar}>Cadastrar</button>
                    </div>
                </form>
            )}
        </div>
    );
}