const db = require('../database/bd');

exports.getAllProducts = (req, res) => {
    const sql = "select * from Produto";

    db.query(sql, (err,result) => {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
            res.send(result)
        }
    })


}