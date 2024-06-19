/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import axios from "axios";

const RED_COLOR = "#fc6464";
const GREEN_COLOR = "#00ff00";

type Product = {
  id: number;
  nome_produto: string;
  desc_produto: string;
  vendas: number;
  valor: number;
};

type ListaProdutoProps = {
  tema: string;
};

const ListaProduto: React.FC<ListaProdutoProps> = ({ tema }) => {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [nomeProduto, setNomeProduto] = useState("");
  const [descProduto, setDescProduto] = useState("");
  const [valor, setValor] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get("http://localhost:3001/produtos")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteProduct = (id: number) => {
    axios.delete(`http://localhost:3001/produtos/${id}`)
      .then(() => {
        fetchProducts();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdate = (id: number) => {
    if (nomeProduto && descProduto && valor) {
      axios.put(`http://localhost:3001/produtosEditar/${id}`, {
          nome_produto: nomeProduto,
          desc_produto: descProduto,
          valor: parseFloat(valor),
        })
        .then(() => {
          fetchProducts();
          resetForm();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setError(
        "Preencha todos os campos, caso não for editar apenas coloque o mesmo valor anterior!"
      );
    }
  };

  const resetForm = () => {
    setNomeProduto("");
    setDescProduto("");
    setValor("");
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="container-fluid">
      <button
        className="btn btn-outline-secondary"
        type="button"
        style={{ background: tema }}
        onClick={toggleExpand}
      >
        Exibir Produtos
      </button>
      {isExpanded && (
        <div className="list-group">
          {produtos.map((produto, index) => (
            <ProductItem
              key={index}
              produto={produto}
              nomeProduto={nomeProduto}
              setNomeProduto={setNomeProduto}
              descProduto={descProduto}
              setDescProduto={setDescProduto}
              valor={valor}
              setValor={setValor}
              deleteProduct={deleteProduct}
              handleUpdate={handleUpdate}
              error={error}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

type ProductItemProps = {
  produto: Product;
  nomeProduto: string;
  setNomeProduto: (value: string) => void;
  descProduto: string;
  setDescProduto: (value: string) => void;
  valor: string;
  setValor: (value: string) => void;
  deleteProduct: (id: number) => void;
  handleUpdate: (id: number) => void;
  error: string;
  index: number;
};

const ProductItem: React.FC<ProductItemProps> = ({
  produto,
  nomeProduto,
  setNomeProduto,
  descProduto,
  setDescProduto,
  valor,
  setValor,
  deleteProduct,
  handleUpdate,
  error,
  index,
}) => (
  <div className="accordion">
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
          {produto.nome_produto}
        </button>
      </h2>
      <div id={`collapseOne${index}`} className="accordion-collapse collapse">
        <div className="accordion-body">
          <div className="input-group-3">
            <label className="input-group mb-1">Nome produto:</label>
            <input
              type="text"
              className="form-control"
              value={nomeProduto}
              onChange={(e) => setNomeProduto(e.target.value)}
              placeholder={produto.nome_produto}
              aria-label="Nome produto"
            />
          </div>
          <div className="input-group-3">
            <label className="input-group mb-1">Descrição:</label>
            <input
              type="text"
              className="form-control"
              value={descProduto}
              onChange={(e) => setDescProduto(e.target.value)}
              placeholder={produto.desc_produto}
              aria-label="Descrição"
            />
          </div>
          <div className="input-group-3">
            <label className="input-group mb-1">Valor:</label>
            <input
              type="number"
              className="form-control"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              placeholder={`R$ ${produto.valor.toFixed(2)}`}
              aria-label="Valor"
            />
          </div>
          <br />
          <div className="input-group mb-3">
            <button
              className="btn btn-danger"
              onClick={() => deleteProduct(produto.id)}
              style={{ background: RED_COLOR }}
            >
              Deletar
            </button>
            <button
              className="btn btn-success"
              onClick={() => handleUpdate(produto.id)}
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
        </div>
      </div>
    </div>
  </div>
);

export default ListaProduto;
