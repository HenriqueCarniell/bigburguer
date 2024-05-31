const db = require('../database/bd');
const bcrypt = require('bcrypt');

let validateEmptyFields = ({ LoginEmail, LoginPassword }) => {
    return LoginEmail && LoginPassword;
}

let validateDatabaseFields = ({ LoginEmail, LoginPassword }) => {
    return new Promise((resolve, reject) => {
        const sql = "select * from Cliente where email = ? and senha = ?";

        db.query(sql, [LoginEmail, LoginPassword], (err,result) => {
            if (err) {
                reject(err);
                console.log(err);
            }
            if (result.length > 0) {
                resolve(result[0]);
            } else {
                resolve(false);
            }
        })
    })
}

exports.SendLoginData = async (req, res) => {
    const { LoginEmail, LoginPassword } = req.body;

    if (!validateEmptyFields(req.body)) {
        return res.send("Preencha todos os campos");
    }

    let user = await validateDatabaseFields(req.body)

    if(user) {
        
    }

}
