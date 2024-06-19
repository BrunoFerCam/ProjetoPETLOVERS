import { useState, useEffect } from "react";
import axios from 'axios'

type props = {
    tema: string
}

export default function RegistrarVendaServico(props:any) {
        let tema = props.tema
        const [servicosVenda, setVendaServicos] = useState<Array<{id:number; cpf_cliente:string; nome_servico:string; quantidade_vendida:number}>>([])
        const [cpf_cliente, setCpfCliente] = useState('');
        const [nome_servico, setNomeservico] = useState('');
        const [quantidade_vendida, setQuantVendida] = useState('');
        const [cpfError, setCpfError] = useState('');
        const [campoError, setCampoError] = useState('');
        useEffect(()=>{
            axios.get('http://localhost:3001/servicosVendas')
             .then((response)=>{
                setVendaServicos(response.data)
             })
             .catch((error)=>{
                console.log(error)
             })
        }, [])

        const registrar = () =>{
            if(cpf_cliente !== '' && nome_servico !== '' && quantidade_vendida !== ''){
                axios.post('http://localhost:3001/servicosVendas', {cpf_cliente, nome_servico, quantidade_vendida})
                 .then(()=>{
                    setNomeservico('');
                    setQuantVendida('');
                    setCpfCliente('');
                    setCampoError('');
                 })
                 .catch((error)=>{
                    if(error.response && error.response.data && error.response.data.error === 'CPF do cliente não encontrado'){
                        setCpfError('CPF do cliente não encontrado')
                    }
                 })
            }
            else if (cpf_cliente === '' || nome_servico === '' || quantidade_vendida === ''){
                setCampoError('Todos os campos devem ser preenchidos.')
            }
        }

        const [isExpanded, setIsExpanded] = useState(false);

        const handleExpand = () => {
            setIsExpanded(!isExpanded);
        }
    
        return (
            <div className="container-fluid">
                <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={handleExpand}>
                    Registrar venda serviço
                </button>
                {isExpanded && (
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={cpf_cliente} onChange={(e)=>setCpfCliente(e.target.value)} placeholder="CPF do cliente" aria-label="CPF do cliente" maxLength={11} aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={nome_servico} onChange={(e)=>setNomeservico(e.target.value)} placeholder="Nome do serviço" aria-label="Nome do serviço" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" value={quantidade_vendida} onChange={(e)=>setQuantVendida(e.target.value)} placeholder="Quantidade vendida" aria-label="Quantidade vendida" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" onClick={registrar} type="button" style={{ background: tema }}>Registrar venda</button>
                    </div>
                    {campoError && <div className="alert alert-danger" role="alert" style={{color:'red'}}>{campoError}</div>}
                    {cpfError && <div className="alert alert-danger" role = "alert" style={{color:'red'}}>{cpfError}</div>}
                </form>
                )}
            </div>
            
        )
    
}