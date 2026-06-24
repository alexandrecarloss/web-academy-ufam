create database if not exists loja_virtual;

use loja_virtual;

create table if not exists cliente (
	cpf varchar(11) primary key,
    nome varchar(150) not null,
    celular varchar(20) not null,
    email varchar(254) not null unique,
    data_nasc date not null
);

create table if not exists endereco (
	codigo int auto_increment primary key,
    logradouro varchar(150) not null,
    numero varchar(10) not null,
    estado char(2) not null,
    cep varchar(8) not null,
    cidade varchar(150) not null,
    bairro varchar(150) not null,
    cliente_cpf varchar(11) not null,
    foreign key (cliente_cpf)
    references cliente (cpf)
    on update cascade
    on delete restrict
);

create table if not exists compra (
	codigo int auto_increment primary key,
    forma_pagamento enum('boleto', 'cartao_credito', 'pix') NOT NULL,
    data_hora datetime not null,
    desconto decimal(10,2) default 0.00,
    total decimal(10,2) not null,
    cliente_cpf varchar(11) not null,
    endereco_codigo int not null,
    foreign key (cliente_cpf)
    references cliente (cpf)
    on update cascade
    on delete restrict,
    foreign key (endereco_codigo)
    references endereco (codigo)
    on update cascade
    on delete restrict
);

create table if not exists categoria (
	codigo int auto_increment primary key,
    nome varchar(100) not null
);

create table if not exists subcategoria (
	codigo int auto_increment primary key,
    nome varchar(100) not null,
    categoria_codigo int not null,
    foreign key (categoria_codigo)
    references categoria (codigo)
    on update cascade
    on delete restrict
);

create table if not exists produto (
	codigo int auto_increment primary key,
    nome varchar(150) not null,
    quantidade int not null,
    preco decimal(10,2) not null,
    fabricante varchar(150) not null,
    modelo varchar(150) not null,
    subcategoria_codigo int not null,
    foreign key (subcategoria_codigo)
    references subcategoria (codigo)
    on update cascade
    on delete restrict
);

create table if not exists produto_serie (
	numero_serie varchar(100) primary key,
    produto_codigo int not null,
    foreign key (produto_codigo)
    references produto (codigo)
    on update cascade
    on delete restrict
);

create table if not exists compra_produto (
	compra_codigo int not null,
    produto_codigo int not null,
    quantidade int not null,
    primary key (compra_codigo, produto_codigo),
    foreign key (compra_codigo)
    references compra (codigo)
    on update cascade
    on delete restrict,
    foreign key (produto_codigo)
    references produto (codigo)
    on update cascade
    on delete restrict
);