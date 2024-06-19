import { useState, useEffect } from "react";
import axios from 'axios'

type props = {
    tema: string
}

export default function FormualarioCadastroServicos(props: any){
        let tema = props.tema
        const [servicos, setservicos] = useState<Array<{id:number; nome_servico:string; desc_servico:string; vendas:number; valor:number }>>([])
        const [nome_servico, setNomeservico] = useState('');
        const [desc_servico, setDescservico] = useState('');
        const [valor, setValor] = useState('');
        const [campoError, setCampoError] = useState('');
        const [servicoExiste, setServicoExiste] = useState('');

        useEffect(()=>{
            axios.get('http://localhost:3001/servicos')
             .then((response)=>{
                setservicos(response.data)
             })
             .catch((error)=>{
                console.log(error)
             })
        }, [])

        const registrar = () =>{
            let vendas = 0
            if(nome_servico !== '' && desc_servico !== '' && valor !== ''){
                axios.post('http://localhost:3001/servicos', {nome_servico, desc_servico, vendas, valor})
                 .then(()=>{
                    setNomeservico('')
                    setDescservico('')
                    setValor('')
                    setCampoError('')
                    setServicoExiste('')
                    
                 })
                 .catch((error)=>{
                    if(error.response && error.response.data && error.response.data.error === 'Serviço já cadastrado'){
                        setServicoExiste('Esse serviço já foi cadastrado.')
                    }
                 })
            }
            else if (nome_servico === '' || desc_servico === '' || valor === ''){
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
                    Cadastrar Serviço
                </button>
                {isExpanded && (
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={nome_servico} onChange={(e)=>setNomeservico(e.target.value)} placeholder="Nome do servico" aria-label="Nome do servico" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={desc_servico} onChange={(e)=>setDescservico(e.target.value)} placeholder="Descrição do servico" aria-label="Descrição do servico" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className = 'input-group-text'>$</span>
                        <input type="number" className="form-control" value={valor} onChange={(e)=>setValor(e.target.value)} placeholder="Valor do servico" aria-label="Valor do servico" />
                        <span className="input-group-text">.00</span>
                    </div>
                    <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary" onClick={registrar} type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
                )}
                {campoError && <div className="alert alert-danger" role = "alert" style={{color:'red'}}>{campoError}</div>}
                {servicoExiste && <div className="alert alert-warning" role = "alert" style={{color:'red'}}>{servicoExiste}</div>}

            </div>
        )
}