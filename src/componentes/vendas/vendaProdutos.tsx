import { useState, useEffect } from "react"
import axios from 'axios'

type props = {
    tema: string
}

export default function RegistrarVendaProduto(props:any) {
        let tema = props.tema
        const [produtosVenda, setVendaProdutos] = useState<Array<{id:number; cpf_cliente:string; nome_produto:string; quantidade_vendida:number}>>([])
        const [cpf_cliente, setCpfCliente] = useState('');
        const [nome_produto, setNomeproduto] = useState('');
        const [quantidade_vendida, setQuantVendida] = useState('');
        const [cpfError, setCpfError] = useState('');
        const [campoError, setCampoError] = useState('');
        useEffect(()=>{
            axios.get('http://localhost:3001/produtosVendas')
             .then((response)=>{
                setVendaProdutos(response.data)
             })
             .catch((error)=>{
                console.log(error)
             })
        }, [])

        const registrar = () =>{
            if(cpf_cliente !== '' && nome_produto !== '' && quantidade_vendida !== ''){
                axios.post('http://localhost:3001/produtosVendas', {cpf_cliente, nome_produto, quantidade_vendida})
                 .then(()=>{
                    setNomeproduto('');
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
            else if (cpf_cliente === '' || nome_produto === '' || quantidade_vendida === ''){
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
                    Registrar venda de produto
                </button>
                {isExpanded && (
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={cpf_cliente} onChange={(e)=>setCpfCliente(e.target.value)} placeholder="CPF do cliente" aria-label="CPF do cliente" maxLength={11} aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={nome_produto} onChange={(e)=>setNomeproduto(e.target.value)} placeholder="Nome do produto" aria-label="Nome do produto" aria-describedby="basic-addon1"/>
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