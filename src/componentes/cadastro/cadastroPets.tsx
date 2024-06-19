import { useState, useEffect} from "react";
import axios from 'axios'
type props ={
    tema: string
}

export default function FormularioCadastroPet (props: any){
        let tema = props.tema
        const[pets, setPets] = useState<Array<{id:number; cpf_dono:string; nome_pet:string; raca:string; genero:string; tipo:string}>>([])
        const[cpf_dono, setCpfDono] = useState('')
        const[nome_pet, setNomePet] = useState('')
        const[raca, setRaca] = useState('')
        const[genero, setGenero] = useState('')
        const[tipo, setTipo] = useState('')
        const[cpfError, setCpfError] = useState('')
        const[campoError, setCampoError] = useState('')

        useEffect(()=>{
            axios.get('http://localhost:3001/pets')
             .then((response)=>{
                setPets(response.data)
             })
             .catch((error)=>{
                console.log(error)
             })
        }, [])

        const registrar = () =>{
            if(nome_pet !== '' && raca !== '' && tipo !== '' && genero !== '' && cpf_dono !== ''){
                axios.post('http://localhost:3001/pets', {cpf_dono, nome_pet, raca, genero, tipo})
                 .then(()=>{
                    setCpfDono('')
                    setNomePet('')
                    setRaca('')
                    setGenero('')
                    setTipo('')
                    setCampoError('')
                 })
                 .catch((error)=>{
                    if(error.response && error.response.data && error.response.data.error === 'CPF do cliente não encontrado'){
                        setCpfError('CPF do cliente não encontrado')
                    }
                 })
            }
            else if(nome_pet === '' || raca === '' || genero === '' || cpf_dono === '' || tipo === ''){
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
                Cadastrar Pet
            </button>
            {isExpanded && (
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={cpf_dono} onChange={(e)=>setCpfDono(e.target.value)} placeholder="CPF do dono" aria-label="CPF do dono" aria-describedby="basic-addon1" maxLength={11}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={nome_pet} onChange={(e)=>setNomePet(e.target.value)} placeholder="Nome do pet" aria-label="Nome do pet" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={raca} onChange={(e)=>setRaca(e.target.value)} placeholder="Raça do pet" aria-label="Nome do pet" aria-describedby="basic-addon1"/>
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
                        <input type="text" className="form-control" value={tipo} onChange={(e)=>setTipo(e.target.value)} placeholder="Tipo do pet" aria-label="Tipo do pet" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" onClick={registrar} type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
                )}
                {campoError && <div className="alert alert-danger" role = "alert" style={{color:'red'}}>{campoError}</div>}
                {cpfError && <div className="alert alert-danger" role = "alert" style={{color:'red'}}>{cpfError}</div>}
            </div>
        )
}