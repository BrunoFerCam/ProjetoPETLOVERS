/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState} from "react";
import axios from 'axios'

type props = {
    tema: string
}

export default function ListaProduto(props: any){
        let red = "#fc6464"
        let tema = props.tema
        let green = "#00ff00"
        const [produtos, setProdutos] = useState<Array<{id:number; nome_produto:string; desc_produto:string; vendas:number; valor:number }>>([])
        const [nome_produto, setNomeProduto] = useState('');
        const [desc_produto, setDescProduto] = useState('');
        const [valor, setValor] = useState('');
        const [cerror, setError] = useState('');

        useEffect(()=>{
            axios.get('http://localhost:3001/produtos')
             .then((response) =>{
                setProdutos(response.data)
             })
             .catch((error)=>{
                console.error(error)
             })
        }, [])

        const deletar = (id:number) =>{
            axios.delete(`http://localhost:3001/produtos/${id}`)
            .then((response) =>{
                updateProdutos();
            })
            .catch((error) =>{
                console.error(error)
            })

        }

        const handleUpdate = (id: number) =>{
            if(nome_produto && desc_produto && valor){
              axios.put(`http://localhost:3001/produtosEditar/${id}`, {nome_produto, desc_produto, valor})
                .then(()=>{
                    updateProdutos();
                    setNomeProduto('')
                    setDescProduto('')
                    setValor('')
                })
                .catch((error) =>{
                  console.error(error)
                })
            }
            else if(nome_produto === '' || desc_produto === '' || valor === ''){
                setError('Preencha todos os campos, caso não for editar apenas coloque o mesmo valor anterior!')
            }  
        }

        const updateProdutos = () =>{
            axios.get('http://localhost:3001/produtos')
            .then((response) => {
              setProdutos(response.data);
            })
            .catch((error) => {
              console.error(error);
            });
        }
        
        const [isExpanded, setIsExpanded] = useState(false);

        const handleExpand = () => {
            setIsExpanded(!isExpanded);
        }
    
        return (
            <div className="container-fluid">
                <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={handleExpand}>
                    Exibir Produtos
                </button>
                {isExpanded && (
                <div className="list-group">
                    {produtos.map((produto, index) =>(
                        <div key={index} className="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button 
                                    className="accordion-button collapsed" 
                                    type="button" 
                                    data-bs-toggle ="collapse"
                                    data-bs-target={`#collapseOne${index}`} 
                                    aria-expanded="true" 
                                    aria-controls={`collapseOne${index}`}
                                    >
                                    {produto.nome_produto}
                                    </button>
                                </h2>
                            <div 
                            id={`collapseOne${index}`} 
                            className="accordion-collapse collapse"
                            >
                                <div className="accordion-body">
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">Nome produto:</label>
                                        <input type="text" className="form-control" value={nome_produto} onChange={(e)=>setNomeProduto(e.target.value)} placeholder={produto.nome_produto} aria-label="Nome produto" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">Descrição:</label>
                                        <input type="text" className="form-control" value={desc_produto} onChange={(e)=>setDescProduto(e.target.value)} placeholder={produto.desc_produto} aria-label="Nome produto" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">Valor:</label>
                                        <input type="number" className="form-control" value={valor} onChange={(e)=>setValor(e.target.value)} placeholder={`R$ ${produto.valor.toFixed(2)}`} aria-label="Raça" aria-describedby="basic-addon1"/>
                                    </div>
                                    <br />
                                    <div className="input-group mb-3">
                                        <button className="input-group-text" onClick={()=>deletar(produto.id)} style={{ background: red }}>Deletar</button>
                                        <button className="input-group-text" onClick={()=>handleUpdate(produto.id)} style={{ background: green }}>Editar</button>
                                    </div>
                                    {cerror && <div className="alert alert-danger" role="alert" style={{color:'red'}}>{cerror}</div>}
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