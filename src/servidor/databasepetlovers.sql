create database databasepetlovers;
use databasepetlovers;

create table if not exists pet (
    id int primary key auto_increment,
    nome_pet varchar(100) not null,
    tipo varchar(100) not null,
    raca varchar(100) not null,
    genero varchar(100) not null,
);

create table if not exists servico(
	id int primary key auto_increment,
	nome_servico varchar(50),
	desc_servico varchar(100),
	vendas int,
	valor int
);

create table if not exists produto(
	id int primary key auto_increment,
    nome_produto varchar(50),
    desc_produto varchar(100),
    vendas int,
    valor int
);

create table if not exists cliente (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome varchar(30),
    nome_social varchar(20) default 'Nenhum',
    genero varchar (20),
    email varchar(50),
    cpf varchar(11),
    dataCpf date,
    rg varchar(20),
    dataRg date,
    servico_consumido int,
    produto_consumido int,
    UNIQUE KEY uq_cpf (cpf),
    UNIQUE KEY uq_rg (rg),
    UNIQUE KEY uq_email(email)
);

insert into cliente (nome, nome_social, genero, email, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido)
values ('Lucas Pereira', 'Nenhum', 'Masculino', 'lucaspereira@example.com', '87584938475', '2001-02-15', '743839201', '2001-02-15', 0, 0);

insert into cliente (nome, nome_social, genero, email, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido)
values ('Larissa Souza', 'Nenhum', 'Feminino', 'larissasouza@example.com', '74583920294', '1999-06-21', '938472910', '1999-06-21', 0, 0);

insert into cliente (nome, nome_social, genero, email, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido)
values ('Carlos Lima', 'Nenhum', 'Masculino', 'carloslima@example.com', '20293847283', '2000-10-10', '482910347', '2000-10-10', 0, 0);

insert into cliente (nome, nome_social, genero, email, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido)
values ('Bruna Fernandes', 'Nenhum', 'Feminino', 'brunafernandes@example.com', '84930238492', '1998-04-23', '384729102', '1998-04-23', 0, 0);

insert into cliente (nome, nome_social, genero, email, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido)
values ('Fernando Machado', 'Nenhum', 'Masculino', 'fernandomachado@example.com', '38492017383', '2002-08-17', '839201847', '2002-08-17', 0, 0);

insert into cliente (nome, nome_social, genero, email, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido)
values ('Renata Ribeiro', 'Nenhum', 'Feminino', 'renataribeiro@example.com', '84720139402', '1997-11-11', '483920183', '1997-11-11', 0, 0);

insert into cliente (nome, nome_social, genero, email, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido)
values ('Eduardo Araújo', 'Nenhum', 'Masculino', 'eduardoaraujo@example.com', '39482029382', '2003-12-09', '839402839', '2003-12-09', 0, 0);


INSERT INTO pet(cpf_dono, nome_pet, raca, genero, tipo)
values('23133213131', 'Rex', 'Golden Retriever', 'macho', 'grande');

INSERT INTO pet(cpf_dono, nome_pet, raca, genero, tipo)
values('66555555555', 'Nina', 'Beagle', 'fêmea', 'pequeno');

INSERT INTO pet(cpf_dono, nome_pet, raca, genero, tipo)
values('44444222222', 'Thor', 'Labrador', 'macho', 'grande');

INSERT INTO pet(cpf_dono, nome_pet, raca, genero, tipo)
values('22222222333', 'Lola', 'Shih Tzu', 'fêmea', 'pequeno');

INSERT INTO pet(cpf_dono, nome_pet, raca, genero, tipo)
values('98765432100', 'Simba', 'Maltês', 'macho', 'pequeno');


INSERT INTO servico(nome_servico, desc_servico, valor, vendas)
values ('Banho completo', 'Banho completo com produtos especializados', 130.00, 0);

INSERT INTO servico(nome_servico, desc_servico, valor, vendas)
values ('Tosa simples', 'Tosa simples para animais pequenos', 100.50, 0);

INSERT INTO servico(nome_servico, desc_servico, valor, vendas)
values ('Hidratação de pele', 'Hidratação especial para pele sensível', 175.30, 0);

INSERT INTO servico(nome_servico, desc_servico, valor, vendas)
values ('Banho para animais grandes', 'Banho detalhado para animais de grande porte', 195.00, 0);

INSERT INTO servico(nome_servico, desc_servico, valor, vendas)
values ('Banho aromatizado', 'Banho com uso de shampoos aromatizados', 115.40, 0);


INSERT INTO produto(nome_produto, desc_produto, valor, vendas)
values ('Coleira ajustável', 'Coleira ajustável para maior conforto do animal', 30.50, 0);

INSERT INTO produto(nome_produto, desc_produto, valor, vendas)
values ('Escova de dentes', 'Escova para higienização bucal de seu pet', 45.00, 0);

INSERT INTO produto(nome_produto, desc_produto, valor, vendas)
values ('Bebedouro automático', 'Bebedouro automático para água fresca o dia todo', 80.00, 0);

INSERT INTO produto(nome_produto, desc_produto, valor, vendas)
values ('Ração premium para gatos', 'Ração nutritiva para gatos de pequeno porte', 45.00, 0);

INSERT INTO produto(nome_produto, desc_produto, valor, vendas)
values ('Ração especial para cachorros', 'Ração de alta qualidade para seu melhor amigo', 600.00, 0);
