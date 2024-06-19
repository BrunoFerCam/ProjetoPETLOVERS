Passo a Passo
Clone o Repositório:

Execute o comando: git clone https://github.com/BrunoFerCam/ProjetoPETLOVERS .

Instale as Dependências:

No diretório do projeto, execute: npm install

Configuração do Banco de Dados:

No MySQL Workbench, importe o arquivo bancoDeDados.sql que se encontra na pasta /src/server/.
Configuração do Servidor:

No diretório /src/server/, edite o arquivo server.js:
Linha 15: altere user: 'root' para o usuário desejado.
Linha 16: modifique password: 'root' para a senha correspondente à sua instância MySQL.
Inicie o Servidor:

No diretório /src/server/, execute o comando: node server.js
Inicie o Projeto:

Na pasta raiz do projeto (/src), execute: npm start
