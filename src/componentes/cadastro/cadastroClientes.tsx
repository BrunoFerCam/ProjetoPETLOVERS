import { Component, useEffect, useState } from "react";
import axios from 'axios';

type Props = {
    tema: string
}


export default function FormularioCadastrarCliente(props: any){
        let tema = props.tema
        const [contas, setContas] = useState<Array<{id:number; nome:string; nome_social:string; genero:string; email:string; cpf:string; dataCpf:Date; rg:string; dataRg:Date; servico_consumido:number, produto_consumido:number }>>([])
        const [nome, setNome] = useState('')
        const [nome_social, setNome_social] = useState('')
        const [genero, setGenero] = useState('');
        const [email, setEmail] = useState('')
        const [cpf, setCpf] = useState('')
        const [dataCpf, setDataCpf] = useState('')
        const [rg, setRg] = useState('')
        const [dataRg, setDataRg] = useState('')
        const [cpfError, setCpfError] = useState('')
        const [rgError, setRgError] = useState('')
        const [emailError, setEmailError] = useState('')
        const [inputError, setInputError] = useState('');
        const [isExpanded, setIsExpanded] = useState(false);

        const handleExpand = () => {
            setIsExpanded(!isExpanded);
        }

        useEffect(()=>{
            axios.get('http://localhost:3001/clientes')
             .then((response)=>{
                setContas(response.data)
             })
             .catch((error)=>{
                console.log(error)
             })
        }, [])

        const Registrar = () =>{
            let servico_consumido = 0
            let produto_consumido = 0
            if(nome !== '' && email !== '' && cpf !== '' && rg !== '' && genero !== ''){
                axios.post('http://localhost:3001/clientes', {nome, nome_social, genero, email, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido})
                 .then(()=>{
                    setNome('')
                    setNome_social('')
                    setGenero('')
                    setEmail('')
                    setCpf('')
                    setDataCpf('')
                    setRg('')
                    setDataRg('')
                    setCpfError('')
                    setRgError('')
                    setEmailError('')
                 })
                 .catch((error)=>{
                    if(error.response && error.response.data && error.response.data.error === 'CPF já cadastrado'){
                        setCpfError('CPF já foi cadastrado.')
                    }
                    else if(error.response && error.response.data && error.response.data.error === 'Email já cadastrado'){
                        setEmailError('E-mail já foi cadastrado.')
                    }
                    else if(error.response && error.response.data && error.response.data.error === 'RG já cadastrado'){
                        setRgError('RG já foi cadastrado.')
                    }
                 })
            }
            else if(nome === '' || email === '' || cpf === '' || rg === '' || dataCpf === '' || dataRg === '' || genero === ''){
                setInputError('Todos os campos devem ser preenchidos, exceto nome social.')
            }
        }
        return (
            <div className="container-fluid">
                <button className="btn btn-outline-secondary" type="button" style={{ background: props.tema }} onClick={handleExpand}>
                Cadastrar Cliente
            </button>
                {isExpanded && (
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value= {nome} onChange={(e)=>setNome(e.target.value)} placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={nome_social} onChange={(e)=>setNome_social(e.target.value)} placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <select className="form-select" value={genero} onChange={(e)=>setGenero(e.target.value)}>
                            <option value="">Gênero</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={cpf} onChange={(e)=>setCpf(e.target.value)} placeholder="CPF" aria-label="CPF"  maxLength={11} aria-describedby="basic-addon1" required/>
                    </div>
                    <label className="input-group mb-1">Data emissão CPF:</label>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" value={dataCpf} onChange={(e)=>setDataCpf(e.target.value)} placeholder="Data de emissão do CPF" aria-label="Data de emissão CPF" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={rg} onChange={(e)=>setRg(e.target.value)} placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" maxLength={11} required />
                    </div>
                    <label className="input-group mb-1">Data emissão RG:</label>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" value={dataRg} onChange={(e)=>setDataRg(e.target.value)} placeholder="Data de emissão do CPF" aria-label="Data de emissão CPF" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" onClick={Registrar} type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
                )}
                {cpfError && <div className="alert alert-danger" role="alert" style={{color:'red'}}>{cpfError}</div>}
                {rgError && <div className="alert alert-danger" role="alert" style={{color:'red'}}>{rgError}</div>}
                {emailError && <div className="alert alert-danger" role="alert" style={{color:'red'}}>{emailError}</div>}
                {inputError && <div className="alert alert-danger" role="alert" style={{color:'red'}}>{inputError}</div>}
            </div>
        )
    }