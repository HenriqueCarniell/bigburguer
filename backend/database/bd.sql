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

drop table Produto;
CREATE Table Produto (
    idproduto int PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    imagem VARCHAR(5000),
    descricao VARCHAR(100),
    preco FLOAT(10,2) NOT NULL
);

drop table Carrinho_de_compras;
CREATE Table Carrinho_de_compras (
    idcarrinhoDeCompras int PRIMARY KEY AUTO_INCREMENT,
    fk_produto int NOT NULL,
    fk_cliente int NOT NULL,
    quantidade int,
    Foreign Key (fk_produto) REFERENCES Produto(idproduto),
    Foreign Key (fk_cliente) REFERENCES Cliente(idcliente)
);

select * from Carrinho_de_compras;

-- Codigo SQL para trazer todos os itens de carrinho de compras associados a pedido
SELECT p.*
FROM Carrinho_de_compras c
JOIN Produto p ON c.fk_produto = p.idproduto
JOIN Cliente cl ON c.fk_cliente = cl.idcliente
WHERE cl.idcliente = 1;

select SUM(p.preco) from carrinho_de_compras c
join produto p on c.fk_produto = p.idproduto
WHERE c.fk_cliente = 1;


INSERT INTO Produto (nome, imagem, descricao, preco) VALUES
('Classic Burger', 'https://www.tasteandflavors.com/wp-content/uploads/2020/05/CLASSIC-BURGER.jpg', 'A classic beef burger with lettuce, tomato, and cheese.', 15),
('Cheese Burger', 'https://images.eatthismuch.com/img/331330_dylpill21_acbc0262-ff8f-4a8e-b6d0-25486109a502.png', 'A juicy beef burger with melted cheese.', 18),
('Bacon Burger', 'https://th.bing.com/th/id/R.662e6ffdec92dab64f11f2442837c285?rik=uIbs68%2f4mAev3Q&pid=ImgRaw&r=0', 'Beef burger topped with crispy bacon and cheddar cheese.', 20),
('Mushroom Burger', 'https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/06/960_2021_Q2_138_PORTOBELLO_MUSHROOM_BURGER_02.jpg', 'Beef burger with sautéed mushrooms and Swiss cheese.', 22),
('Veggie Burger', 'https://assets.bonappetit.com/photos/57acae2d1b33404414975121/master/pass/ultimate-veggie-burger.jpg', 'A delicious vegetarian burger made with black beans and vegetables.', 17),
('BBQ Burger', 'https://th.bing.com/th/id/OIP.UWhwUuA7-bHiimPQIxwkNAHaHa?rs=1&pid=ImgDetMain', 'Beef burger with BBQ sauce, onion rings, and cheddar cheese.', 21),
('Spicy Burger', 'https://www.gardengourmet.it/sites/default/files/recipes/aeead5804e79ff6fb98b2039619c5230_200828_MEDIAMONKS_GG_Spicytarian.jpg', 'A spicy beef burger with jalapeños and pepper jack cheese.', 19),
('Avocado Burger', 'https://th.bing.com/th/id/OIP.Nt9tVzqmddbzN7shLwFpBQHaFj?rs=1&pid=ImgDetMain', 'Beef burger topped with fresh avocado and bacon.', 23),
('Chicken Burger', 'https://th.bing.com/th/id/OIP.CbPm0hRTbCSUyrHVx9_28AHaF6?rs=1&pid=ImgDetMain', 'Grilled chicken burger with lettuce, tomato, and mayo.', 18),
('Fish Burger', 'https://th.bing.com/th/id/OIP.mI8JuBq4bMJXLPZLiXZYDwHaJu?rs=1&pid=ImgDetMain', 'Crispy fish fillet burger with tartar sauce and lettuce.', 20);

select * from Cliente;

select * from Produto;

delete from cliente;