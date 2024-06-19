/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import axios from "axios";

const RED_COLOR = "#fc6464";
const GREEN_COLOR = "#00ff00";

type Cliente = {
  id: number;
  nome: string;
  nome_social: string;
  genero: string;
  email: string;
  cpf: string;
  dataCpf: Date;
  rg: string;
  dataRg: Date;
  servico_consumido: number;
  produto_consumido: number;
};

type ListaClienteProps = {
  tema: string;
};

const ListaCliente: React.FC<ListaClienteProps> = ({ tema }) => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [nome, setNome] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [genero, setGenero] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const fetchClientes = async () => {
    try {
      const response = await axios.get("http://localhost:3001/clientes");
      setClientes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/clientes/${id}`);
      fetchClientes();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id: number) => {
    if (nome && nomeSocial && email) {
      try {
        await axios.put(`http://localhost:3001/clientesEditar/${id}`, {
          nome,
          nome_social: nomeSocial,
          genero,
          email,
        });
        fetchClientes();
        resetForm();
      } catch (error) {
        console.error(error);
      }
    } else {
      setError("Preencha todos os campos. Caso não for editar, coloque o mesmo valor anterior.");
    }
  };

  const resetForm = () => {
    setNome("");
    setNomeSocial("");
    setGenero("");
    setEmail("");
  };

  return (
    <div className="container-fluid">
      <button
        className="btn btn-outline-secondary"
        type="button"
        style={{ background: tema }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Exibir Clientes
      </button>
      {isExpanded && (
        <div className="list-group">
          {clientes.map((cliente, index) => (
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
                    {cliente.nome}
                  </button>
                </h2>
                <div
                  id={`collapseOne${index}`}
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <ClienteForm
                      cliente={cliente}
                      nome={nome}
                      setNome={setNome}
                      nomeSocial={nomeSocial}
                      setNomeSocial={setNomeSocial}
                      genero={genero}
                      setGenero={setGenero}
                      email={email}
                      setEmail={setEmail}
                      handleDelete={handleDelete}
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

type ClienteFormProps = {
  cliente: Cliente;
  nome: string;
  setNome: (value: string) => void;
  nomeSocial: string;
  setNomeSocial: (value: string) => void;
  genero: string;
  setGenero: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  handleDelete: (id: number) => void;
  handleUpdate: (id: number) => void;
  error: string;
};

const ClienteForm: React.FC<ClienteFormProps> = ({
  cliente,
  nome,
  setNome,
  nomeSocial,
  setNomeSocial,
  genero,
  setGenero,
  email,
  setEmail,
  handleDelete,
  handleUpdate,
  error,
}) => (
  <>
    <div className="input-group mb-1">
      <label className="input-group-text">Nome:</label>
      <input
        type="text"
        className="form-control"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder={cliente.nome}
        aria-label="Nome cliente"
      />
    </div>
    <div className="input-group mb-1">
      <label className="input-group-text">Nome Social:</label>
      <input
        type="text"
        className="form-control"
        value={nomeSocial}
        onChange={(e) => setNomeSocial(e.target.value)}
        placeholder={cliente.nome_social}
        aria-label="Nome social cliente"
      />
    </div>
    <div className="input-group mb-1">
      <label className="input-group-text">Gênero:</label>
      <select
        className="form-select"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      >
        <option value="">{cliente.genero}</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        <option value="outro">Outro</option>
      </select>
    </div>
    <div className="input-group mb-1">
      <label className="input-group-text">CPF:</label>
      <input
        type="text"
        className="form-control"
        placeholder={cliente.cpf}
        aria-label="CPF"
        disabled
      />
    </div>
    <div className="input-group mb-1">
      <label className="input-group-text">RG:</label>
      <input
        type="text"
        className="form-control"
        placeholder={cliente.rg}
        aria-label="RG"
        disabled
      />
    </div>
    <div className="input-group mb-1">
      <label className="input-group-text">E-mail:</label>
      <input
        type="text"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={cliente.email}
        aria-label="Email cliente"
      />
    </div>
    <div className="input-group mb-3">
      <button
        className="btn btn-danger"
        onClick={() => handleDelete(cliente.id)}
        style={{ background: RED_COLOR }}
      >
        Deletar
      </button>
      <button
        className="btn btn-success"
        onClick={() => handleUpdate(cliente.id)}
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

export default ListaCliente;
