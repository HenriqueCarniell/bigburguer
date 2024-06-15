const db = require('../database/bd');

exports.getProductCart = (req, res) => {
    const { idusuario } = req.params;

    console.log(idusuario);

    const sqlProducts = "SELECT p.* FROM Carrinho_de_compras c JOIN Produto p ON c.fk_produto = p.idproduto JOIN Cliente cl ON c.fk_cliente = cl.idcliente WHERE cl.idcliente = ?;";

    const sqlTotalPrice = "SELECT SUM(p.preco) AS total_preco FROM Carrinho_de_compras c JOIN Produto p ON c.fk_produto = p.idproduto WHERE c.fk_cliente = ?;";

    db.query(sqlProducts, [idusuario], (errProducts, resultProducts) => {
        if (errProducts) {
            console.log(errProducts);
            return res.status(500).json({ error: "Erro ao buscar os produtos no carrinho" });
        }

        db.query(sqlTotalPrice, [idusuario], (errTotalPrice, resultTotalPrice) => {
            if (errTotalPrice) {
                console.log(errTotalPrice);
                return res.status(500).json({ error: "Erro ao calcular o total do carrinho" });
            }

            res.json({
                products: resultProducts,
                total_preco: resultTotalPrice[0].total_preco
            });
        });
    });
};
