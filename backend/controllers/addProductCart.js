const db = require('../database/bd')

exports.addProductCart = (req,res) => {
    const {idproduto} = req.params;
    const {idusuario} = req.params;

    console.log(idproduto, idusuario);

    const sql = "insert into Carrinho_de_compras(fk_pedido, fk_produto, fk_cliente) values (?,?,?)"

    db.query(sql, [null, idproduto, idusuario], (err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.json(result);
        }
    })
}