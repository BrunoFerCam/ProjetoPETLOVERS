const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

// Set up the application
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// Database configuration
const dbOptions = {
  host: 'localhost',
  user: 'root',
  password: 'fatec',
  database: 'databasepetlovers',
};

// Database connection function
async function createConnection() {
  const connection = await mysql.createConnection(dbOptions);
  return connection;
}

// Route to get all clients
app.get('/clientes', async (req, res) => {
  const connection = await createConnection();
  const [rows] = await connection.execute('SELECT * FROM cliente');
  connection.end();
  res.json(rows);
});

// Route to add a new client
app.post('/clientes', async (req, res) => {
  const { nome, nome_social, genero, email, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido } = req.body;
  const connection = await createConnection();

  // Check for existing CPF, email, and RG
  const [cpfExists] = await connection.execute('SELECT cpf FROM cliente WHERE cpf=?', [cpf]);
  if (cpfExists.length > 0) return res.status(400).json({ error: 'CPF já cadastrado' });

  const [emailExists] = await connection.execute('SELECT email FROM cliente WHERE email=?', [email]);
  if (emailExists.length > 0) return res.status(400).json({ error: 'Email já cadastrado' });

  const [rgExists] = await connection.execute('SELECT rg FROM cliente WHERE rg=?', [rg]);
  if (rgExists.length > 0) return res.status(400).json({ error: 'RG já cadastrado' });

  // Insert new client
  await connection.execute(
    'INSERT INTO cliente (nome, nome_social, email, genero, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [nome, nome_social, genero, email, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido]
  );
  res.json({ message: 'Registro feito com sucesso' });
});

// Route to delete a client
app.delete('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  const connection = await createConnection();
  await connection.execute('DELETE FROM cliente WHERE id = ?', [id]);
  connection.end();
  res.json({ message: 'Cliente excluído com sucesso' });
});

// Route to update a client
app.put('/clientesEditar/:id', async (req, res) => {
  const { nome, nome_social, email } = req.body;
  const { id } = req.params;
  const connection = await createConnection();
  await connection.execute(
    'UPDATE cliente SET nome = ?, nome_social = ?, email = ? WHERE id = ?',
    [nome, nome_social, email, id]
  );

  const [updatedRow] = await connection.execute('SELECT * FROM cliente WHERE id = ?', [id]);
  res.json(updatedRow[0]);
});

// Route to get all pets
app.get('/pets', async (req, res) => {
  const connection = await createConnection();
  const [rows] = await connection.execute('SELECT * FROM pet');
  connection.end();
  res.json(rows);
});

// Route to add a new pet
app.post('/pets', async (req, res) => {
  const { cpf_dono, nome_pet, raca, genero, tipo } = req.body;
  const connection = await createConnection();
  try {
    const [ownerExists] = await connection.execute('SELECT * FROM cliente WHERE cpf = ?', [cpf_dono]);
    if (ownerExists.length > 0) {
      await connection.execute(
        'INSERT INTO pet (cpf_dono, nome_pet, raca, genero, tipo) VALUES (?, ?, ?, ?, ?)',
        [cpf_dono, nome_pet, raca, genero, tipo]
      );
      res.json({ message: 'Registro de pet feito com sucesso' });
    } else {
      res.status(404).json({ error: 'CPF não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro durante o processo' });
  } finally {
    if (connection) await connection.end();
  }
});

// Route to delete a pet
app.delete('/pets/:id', async (req, res) => {
  const { id } = req.params;
  const connection = await createConnection();
  await connection.execute('DELETE FROM pet WHERE id = ?', [id]);
  connection.end();
  res.json({ message: 'Pet excluído com sucesso' });
});

// Route to update a pet
app.put('/petsEditar/:id', async (req, res) => {
  const { cpf_dono, nome_pet, raca, genero, tipo } = req.body;
  const { id } = req.params;
  const connection = await createConnection();
  await connection.execute(
    'UPDATE pet SET cpf_dono = ?, nome_pet = ?, raca = ?, genero = ?, tipo = ? WHERE id = ?',
    [cpf_dono, nome_pet, raca, genero, tipo, id]
  );

  const [updatedRow] = await connection.execute('SELECT * FROM pet WHERE id = ?', [id]);
  res.json(updatedRow[0]);
});

// Route to get all products
app.get('/produtos', async (req, res) => {
  const connection = await createConnection();
  const [rows] = await connection.execute('SELECT * FROM produto');
  connection.end();
  res.json(rows);
});

// Route to add a new product
app.post('/produtos', async (req, res) => {
  const { nome_produto, desc_produto, vendas, valor } = req.body;
  const connection = await createConnection();

  // Check if product already exists
  const [productExists] = await connection.execute('SELECT nome_produto FROM produto WHERE nome_produto=?', [nome_produto]);
  if (productExists.length > 0) return res.status(400).json({ error: 'Produto já cadastrado' });

  // Insert new product
  await connection.execute(
    'INSERT INTO produto (nome_produto, desc_produto, vendas, valor) VALUES (?, ?, ?, ?)',
    [nome_produto, desc_produto, vendas, valor]
  );
  res.json({ message: 'Registro de produto feito com sucesso' });
});

// Route to delete a product
app.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  const connection = await createConnection();
  await connection.execute('DELETE FROM produto WHERE id = ?', [id]);
  connection.end();
  res.json({ message: 'Produto excluído com sucesso' });
});

// Route to update a product
app.put('/produtosEditar/:id', async (req, res) => {
  const { nome_produto, desc_produto, valor } = req.body;
  const { id } = req.params;
  const connection = await createConnection();
  await connection.execute(
    'UPDATE produto SET nome_produto = ?, desc_produto = ?, valor = ? WHERE id = ?',
    [nome_produto, desc_produto, valor, id]
  );

  const [updatedRow] = await connection.execute('SELECT * FROM produto WHERE id = ?', [id]);
  res.json(updatedRow[0]);
});

// Route to get all services
app.get('/servicos', async (req, res) => {
  const connection = await createConnection();
  const [rows] = await connection.execute('SELECT * FROM servico');
  connection.end();
  res.json(rows);
});

// Route to add a new service
app.post('/servicos', async (req, res) => {
  const { nome_servico, desc_servico, vendas, valor } = req.body;
  const connection = await createConnection();

  // Check if service already exists
  const [serviceExists] = await connection.execute('SELECT nome_servico FROM servico WHERE nome_servico=?', [nome_servico]);
  if (serviceExists.length > 0) return res.status(400).json({ error: 'Serviço já cadastrado' });

  // Insert new service
  await connection.execute(
    'INSERT INTO servico (nome_servico, desc_servico, vendas, valor) VALUES (?, ?, ?, ?)',
    [nome_servico, desc_servico, vendas, valor]
  );
  res.json({ message: 'Registro de serviço feito com sucesso' });
});

// Route to delete a service
app.delete('/servicos/:id', async (req, res) => {
  const { id } = req.params;
  const connection = await createConnection();
  await connection.execute('DELETE FROM servico WHERE id = ?', [id]);
  connection.end();
  res.json({ message: 'Serviço excluído com sucesso' });
});

// Route to update a service
app.put('/servicosEditar/:id', async (req, res) => {
  const { nome_servico, desc_servico, valor } = req.body;
  const { id } = req.params;
  const connection = await createConnection();
  await connection.execute(
    'UPDATE servico SET nome_servico = ?, desc_servico = ?, valor = ? WHERE id = ?',
    [nome_servico, desc_servico, valor, id]
  );

  const [updatedRow] = await connection.execute('SELECT * FROM servico WHERE id = ?', [id]);
  res.json(updatedRow[0]);
});

// Route to get all service sales records
app.get('/servicosVendas', async (req, res) => {
  const connection = await createConnection();
  const [rows] = await connection.execute('SELECT * FROM RegVendaServico');
  connection.end();
  res.json(rows);
});

// Route to add a new service sale
app.post('/servicosVendas', async (req, res) => {
  const { cpf_cliente, nome_servico, quantidade_vendida } = req.body;
  const connection = await createConnection();

  try {
    const [clientExists] = await connection.execute('SELECT * FROM cliente WHERE cpf = ?', [cpf_cliente]);
    if (clientExists.length > 0) {
      await connection.execute(
        'INSERT INTO RegVendaServico (cpf_cliente, nome_servico, quantidade_vendida) VALUES (?, ?, ?)',
        [cpf_cliente, nome_servico, quantidade_vendida]
      );
      res.json({ message: 'Registro de venda de serviço feito com sucesso' });
    } else {
      res.status(404).json({ error: 'CPF do cliente não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro durante o processo' });
  } finally {
    if (connection) await connection.end();
  }
});

// Route to get all product sales records
app.get('/produtosVendas', async (req, res) => {
  const connection = await createConnection();
  const [rows] = await connection.execute('SELECT * FROM RegVendaProduto');
  connection.end();
  res.json(rows);
});

// Route to add a new product sale
app.post('/produtosVendas', async (req, res) => {
  const { cpf_cliente, nome_produto, quantidade_vendida } = req.body;
  const connection = await createConnection();

  try {
    const [clientExists] = await connection.execute('SELECT * FROM cliente WHERE cpf = ?', [cpf_cliente]);
    if (clientExists.length > 0) {
      await connection.execute(
        'INSERT INTO RegVendaProduto (cpf_cliente, nome_produto, quantidade_vendida) VALUES (?, ?, ?)',
        [cpf_cliente, nome_produto, quantidade_vendida]
      );
      res.json({ message: 'Registro de venda de produto feito com sucesso' });
    } else {
      res.status(404).json({ error: 'CPF do cliente não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro durante o processo' });
  } finally {
    if (connection) await connection.end();
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
