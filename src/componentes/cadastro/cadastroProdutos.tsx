import { useState, useEffect } from "react";
import axios from 'axios'

type props = {
    tema: string
}

export default function FormualarioCadastroProdutos(props: any){
        let tema = props.tema
        const [produtos, setProdutos] = useState<Array<{id:number; nome_produto:string; desc_produto:string; vendas:number; valor:number }>>([])
        const [nome_produto, setNomeProduto] = useState('');
        const [desc_produto, setDescProduto] = useState('');
        const [valor, setValor] = useState('');
        const [campoError, setCampoError] = useState('');
        const [produtoExiste, setProdutoExiste] = useState('');

        useEffect(()=>{
            axios.get('http://localhost:3001/produtos')
             .then((response)=>{
                setProdutos(response.data)
             })
             .catch((error)=>{
                console.log(error)
             })
        }, [])

        const registrar = () =>{
            let vendas = 0
            if(nome_produto !== '' && desc_produto !== '' && valor !== ''){
                axios.post('http://localhost:3001/produtos', {nome_produto, desc_produto, vendas, valor})
                 .then(()=>{
                    setNomeProduto('')
                    setDescProduto('')
                    setValor('')
                    setCampoError('')
                    setProdutoExiste('')
                 })
                 .catch((error)=>{
                    if(error.response && error.response.data && error.response.data.error === 'Produto já cadastrado'){
                        setProdutoExiste('Esse produto já foi cadastrado.')
                    }
                 })
            }
            else if (nome_produto === '' || desc_produto === '' || valor === ''){
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
                    Cadastrar Produto
                </button>
                {isExpanded && (
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={nome_produto} onChange={(e)=>setNomeProduto(e.target.value)} placeholder="Nome do produto" aria-label="Nome do produto" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={desc_produto} onChange={(e)=>setDescProduto(e.target.value)} placeholder="Descrição do produto" aria-label="Descrição do produto" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className = 'input-group-text'>$</span>
                        <input type="number" className="form-control" value={valor} onChange={(e)=>setValor(e.target.value)} placeholder="Valor do produto" aria-label="Valor do produto" />
                        <span className="input-group-text">.00</span>
                    </div>
                    <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary" onClick={registrar} type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
                )}
                {campoError && <div className="alert alert-danger" role = "alert" style={{color:'red'}}>{campoError}</div>}
                {produtoExiste && <div className="alert alert-warning" role = "alert" style={{color:'red'}}>{produtoExiste}</div>}

            </div>
        )
}
               