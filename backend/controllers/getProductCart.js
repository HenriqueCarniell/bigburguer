const db = require('../database/bd');

exports.getProductCart = (req,res) => {
    const sql = "SELECT p.* FROM Carrinho_de_compras c JOIN Produto p ON c.fk_produto = p.idproduto;"

    db.query(sql, (err,result) => {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
            res.json(result);
        }
    })
}