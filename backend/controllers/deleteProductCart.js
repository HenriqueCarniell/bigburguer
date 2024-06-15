const db = require('../database/bd')

exports.deleteProductCart = (req,res) => {
    const {idproduto} = req.params
    const {idusuario} = req.params
    
    const sql = "DELETE FROM Carrinho_de_compras WHERE fk_produto = ? AND fk_cliente = ?;"

    db.query(sql, [idproduto, idusuario], (err,result) => {
        if(err) {
            console.log(err)
        } else {
            console.log(result);
            res.send(result)
        }
    })
}