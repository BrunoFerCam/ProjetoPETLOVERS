/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState} from "react";
import axios from 'axios'

type props = {
    tema: string
}

export default function ListaPet(props: any){
        let red = "#fc6464"
        let tema = props.tema
        let green = "#00ff00"
        const [pets, setPets] = useState<Array<{id:number; cpf_dono:string; nome_pet:string; raca:string; genero:string; tipo:string}>>([])
        const [cpf_dono, setCpfDono] = useState('')
        const [nome_pet, setNomePet] = useState('')
        const[raca, setRaca] = useState('');
        const[genero, setGenero] = useState('');
        const[tipo, setTipo] = useState('');
        const [cerror, setError] = useState('');

        useEffect(()=>{
            axios.get('http://localhost:3001/pets')
             .then((response) =>{
                setPets(response.data)
             })
             .catch((error)=>{
                console.error(error)
             })
        }, [])

        const deletar = (id:number) =>{
            axios.delete(`http://localhost:3001/pets/${id}`)
            .then((response) =>{
                updatePets();
            })
            .catch((error) =>{
                console.error(error)
            })

        }

        const handleUpdate = (id: number) =>{
            if(nome_pet && raca && tipo && genero){
              axios.put(`http://localhost:3001/petsEditar/${id}`, {cpf_dono, nome_pet, raca, genero, tipo})
                .then(()=>{
                    updatePets();
                    setCpfDono('')
                    setNomePet('')
                    setRaca('')
                    setGenero('')
                    setTipo('')
                })
                .catch((error) =>{
                  console.error(error)
                })
            }
            else if(nome_pet === '' || cpf_dono === '' || tipo === '' || raca === '' || genero === ''){
                setError('Preencha todos os campos, caso não for editar apenas coloque o mesmo valor anterior!')
            }  
     }

        const updatePets = () =>{
            axios.get('http://localhost:3001/pets')
            .then((response) => {
              setPets(response.data);
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
                    Exibir Pets
                </button>
                {isExpanded && (
                <div className="list-group">
                    {pets.map((pet, index) =>(
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
                                    {pet.nome_pet}
                                    </button>
                                </h2>
                            <div 
                            id={`collapseOne${index}`} 
                            className="accordion-collapse collapse"
                            >
                                <div className="accordion-body">
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">CPF do dono:</label>
                                        <input type="text" className="form-control" value={cpf_dono} onChange={(e)=>setCpfDono(e.target.value)} placeholder={pet.cpf_dono} maxLength={11} aria-label="Nome pet" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">Nome:</label>
                                        <input type="text" className="form-control" value={nome_pet} onChange={(e)=>setNomePet(e.target.value)} placeholder={pet.nome_pet} aria-label="Nome pet" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">Raça:</label>
                                        <input type="text" className="form-control" value={raca} onChange={(e)=>setRaca(e.target.value)} placeholder={pet.raca} aria-label="Raça" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">Gênero:</label>
                                        <input type="text" className="form-control" value={genero} onChange={(e)=>setGenero(e.target.value)} placeholder={pet.genero} aria-label="genero" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">Tipo:</label>
                                        <input type="text" className="form-control" value={tipo} onChange={(e)=>setTipo(e.target.value)} placeholder={pet.tipo} aria-label="tipo" aria-describedby="basic-addon1"/>
                                    </div>
                                    <br />
                                    <div className="input-group mb-3">
                                        <button className="input-group-text" onClick={()=>deletar(pet.id)} style={{ background: red }}>Deletar</button>
                                        <button className="input-group-text" onClick={()=>handleUpdate(pet.id)} style={{ background: green }}>Editar</button>
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