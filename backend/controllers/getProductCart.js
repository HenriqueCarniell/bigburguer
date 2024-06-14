const db = require('../database/bd');

exports.getProductCart = (req,res) => {

    const {idusuario} = req.params

    console.log(idusuario)
    
    const sql = "SELECT p.* FROM Carrinho_de_compras c JOIN Produto p ON c.fk_produto = p.idproduto JOIN Cliente cl ON c.fk_cliente = cl.idcliente WHERE cl.idcliente = ?;"

    db.query(sql, [idusuario], (err,result) => {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
            res.json(result);
        }
    })
}