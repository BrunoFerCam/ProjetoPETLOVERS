/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import axios from "axios";

const RED_COLOR = "#fc6464";
const GREEN_COLOR = "#00ff00";

type Pet = {
  id: number;
  cpf_dono: string;
  nome_pet: string;
  raca: string;
  genero: string;
  tipo: string;
};

type ListaPetProps = {
  tema: string;
};

const ListaPet: React.FC<ListaPetProps> = ({ tema }) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [cpfDono, setCpfDono] = useState("");
  const [nomePet, setNomePet] = useState("");
  const [raca, setRaca] = useState("");
  const [genero, setGenero] = useState("");
  const [tipo, setTipo] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/pets")
      .then((response) => {
        setPets(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deletar = (id: number) => {
    axios.delete(`http://localhost:3001/pets/${id}`)
      .then(() => {
        updatePets();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdate = (id: number) => {
    if (nomePet && raca && tipo && genero) {
      axios.put(`http://localhost:3001/petsEditar/${id}`, {
          cpfDono,
          nome_pet: nomePet,
          raca,
          genero,
          tipo,
        })
        .then(() => {
          updatePets();
          resetForm();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setError(
        "Preencha todos os campos. Caso não for editar, coloque o mesmo valor anterior."
      );
    }
  };

  const updatePets = () => {
    axios.get("http://localhost:3001/pets")
      .then((response) => {
        setPets(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const resetForm = () => {
    setCpfDono("");
    setNomePet("");
    setRaca("");
    setGenero("");
    setTipo("");
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container-fluid">
      <button
        className="btn btn-outline-secondary"
        type="button"
        style={{ background: tema }}
        onClick={handleExpand}
      >
        Exibir Pets
      </button>
      {isExpanded && (
        <div className="list-group">
          {pets.map((pet, index) => (
            <div key={index} className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
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
                    <PetForm
                      pet={pet}
                      cpfDono={cpfDono}
                      setCpfDono={setCpfDono}
                      nomePet={nomePet}
                      setNomePet={setNomePet}
                      raca={raca}
                      setRaca={setRaca}
                      genero={genero}
                      setGenero={setGenero}
                      tipo={tipo}
                      setTipo={setTipo}
                      handleDelete={deletar}
                      handleUpdate={handleUpdate}
                      error={error}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

type PetFormProps = {
  pet: Pet;
  cpfDono: string;
  setCpfDono: (value: string) => void;
  nomePet: string;
  setNomePet: (value: string) => void;
  raca: string;
  setRaca: (value: string) => void;
  genero: string;
  setGenero: (value: string) => void;
  tipo: string;
  setTipo: (value: string) => void;
  handleDelete: (id: number) => void;
  handleUpdate: (id: number) => void;
  error: string;
};

const PetForm: React.FC<PetFormProps> = ({
  pet,
  cpfDono,
  setCpfDono,
  nomePet,
  setNomePet,
  raca,
  setRaca,
  genero,
  setGenero,
  tipo,
  setTipo,
  handleDelete,
  handleUpdate,
  error,
}) => (
  <>
    <div className="input-group mb-1">
      <label className="input-group-text">CPF do dono:</label>
      <input
        type="text"
        className="form-control"
        value={cpfDono}
        onChange={(e) => setCpfDono(e.target.value)}
        placeholder={pet.cpf_dono}
        maxLength={11}
        aria-label="CPF do dono"
      />
    </div>
    <div className="input-group mb-1">
      <label className="input-group-text">Nome:</label>
      <input
        type="text"
        className="form-control"
        value={nomePet}
        onChange={(e) => setNomePet(e.target.value)}
        placeholder={pet.nome_pet}
        aria-label="Nome pet"
      />
    </div>
    <div className="input-group mb-1">
      <label className="input-group-text">Raça:</label>
      <input
        type="text"
        className="form-control"
        value={raca}
        onChange={(e) => setRaca(e.target.value)}
        placeholder={pet.raca}
        aria-label="Raça"
      />
    </div>
    <div className="input-group mb-1">
      <label className="input-group-text">Gênero:</label>
      <input
        type="text"
        className="form-control"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
        placeholder={pet.genero}
        aria-label="Gênero"
      />
    </div>
    <div className="input-group mb-1">
      <label className="input-group-text">Tipo:</label>
      <input
        type="text"
        className="form-control"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        placeholder={pet.tipo}
        aria-label="Tipo"
      />
    </div>
    <div className="input-group mb-3">
      <button
        className="btn btn-danger"
        onClick={() => handleDelete(pet.id)}
        style={{ background: RED_COLOR }}
      >
        Deletar
      </button>
      <button
        className="btn btn-success"
        onClick={() => handleUpdate(pet.id)}
        style={{ background: GREEN_COLOR }}
      >
        Editar
      </button>
    </div>
    {error && (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )}
  </>
);

export default ListaPet;
