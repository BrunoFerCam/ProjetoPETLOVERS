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
