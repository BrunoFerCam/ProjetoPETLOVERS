import { Component, useEffect, useState } from "react";
import axios from 'axios';

        const [contas, setContas] = useState<Array<{id:number; nome:string; nome_social:string; email:string; cpf:string; dataCpf:Date; rg:string; dataRg:Date; servico_consumido:number, produto_consumido:number }>>([])
        const [nome, setNome] = useState('')
        const [nome_social, setNome_social] = useState('')
        const [email, setEmail] = useState('')
        const [cpf, setCpf] = useState('')
        const [dataCpf, setDataCpf] = useState('')
        const [rg, setRg] = useState('')
        const [dataRg, setDataRg] = useState('')
        const [cpfError, setCpfError] = useState('')
        const [rgError, setRgError] = useState('')
        const [emailError, setEmailError] = useState('')

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
            if(nome !== '' && email !== '' && cpf !== '' && rg !== ''){
                axios.post('http://localhost:3001/clientes', {nome, nome_social, email, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido})
                 .then(()=>{
                    setNome('')
                    setNome_social('')
                    setEmail('')
                    setCpf('')
                    setDataCpf('')
                    setRg('')
                    setDataRg('')
                 })
                 .catch((error)=>{
                    if(error.response && error.response.data && error.response.data.error === 'CPF já cadastrado'){
                        setCpfError('CPF já foi cadastrado')
                    }
                    else if(error.response && error.response.data && error.response.data.error === 'Email já cadastrado'){
                        setEmailError('E-mail já foi cadastrado')
                    }
                    else if(error.response && error.response.data && error.response.data.error === 'RG já cadastrado'){
                        setRgError('RG já foi cadastrado')
                    }
                 })
            }
        }