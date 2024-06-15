const db = require('../database/bd')

exports.deleteProductCart = (req,res) => {
    const {idproduto} = req.params
    const {idusuario} = req.params

    console.log(idproduto, idusuario)
    
    const sql = "DELETE FROM Carrinho_de_compras WHERE fk_produto = ? AND fk_cliente = ?;"

    db.query(sql, [idproduto, idusuario], (err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}