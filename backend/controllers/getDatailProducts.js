const db = require('../database/bd')

exports.getDetailProduct = (req,res) => {
    const id = req.params.idproduto;

    const sql = "SELECT * FROM Produto WHERE idproduto = ?";

    db.query(sql, [id], (err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
}