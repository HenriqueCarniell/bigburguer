const db = require('../database/bd')

exports.addProductCart = (req,res) => {
    const {idproduto} = req.params

    console.log(idproduto);

    const sql = "insert into Carrinho_de_compras(fk_pedido, fk_produto) values (?,?)"

    db.query(sql, [null, idproduto], (err,result) => {
        if(err) {
            console.log(err)
        } else {
            console.log(result);
            res.json(result);
        }
    })
}