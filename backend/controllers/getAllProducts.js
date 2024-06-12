const db = require('../database/bd');

exports.getAllProducts = async (req, res) => {
    const sql = "select * from Produto";
    
    db.query(sql, (err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}