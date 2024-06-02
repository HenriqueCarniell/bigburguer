-- Active: 1706295515506@@localhost@3306@bigburger
CREATE DATABASE bigburger;

use bigburger;

drop table Cliente;
CREATE Table Cliente (
    idcliente int PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    cpf char(11),
    data_aniversario DATE
);

drop table Telefone;
CREATE Table Telefone (
    idtelefone int PRIMARY KEY AUTO_INCREMENT,
    numero char(11),
    tipo ENUM('tel_fixo, tel_celular'),
    fk_idcliente int NOT NULL,
    Foreign Key (fk_idcliente) REFERENCES Cliente(idcliente)
);

drop table Endereco;
CREATE Table Endereco(
    idendereco int PRIMARY KEY AUTO_INCREMENT,
    numero VARCHAR(100),
    cep CHAR(8),
    ponto_referencia VARCHAR(1000),
    cidade VARCHAR(100),
    estado VARCHAR(100),
    fk_idcliente int NOT NULL,
    Foreign Key (fk_idcliente) REFERENCES Cliente(idcliente)
);

drop table Carrinho_de_compras;
CREATE Table Carrinho_de_compras (
    idcarrinhoDeCompras int PRIMARY KEY AUTO_INCREMENT,
    fk_pedido int,
    fk_produto int,
    Foreign Key (fk_pedido) REFERENCES Pedido(idpedido),
    Foreign Key (fk_produto) REFERENCES Produto(idproduto)
);

drop table Pedido;
CREATE Table Pedido (
    idpedido int PRIMARY KEY AUTO_INCREMENT,
    quantidade int,
    dataPedido DATE,
    preco int
);

drop table Produto;
CREATE Table Produto (
    idproduto int PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    quantidade int NOT NULL,
    imagem VARCHAR(5000),
    descricao VARCHAR(100),
    preco int NOT NULL
);

select * from Cliente;

delete from cliente;