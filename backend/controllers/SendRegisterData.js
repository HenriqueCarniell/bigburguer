const db = require('../database/bd');
const bcrypt = require('bcrypt')

let validateEmptyFields = ({ LoginName, LoginEmail, LoginPassword }) => {
    return LoginName && LoginEmail && LoginPassword;
}

let validateDatabaseDataExist = ({ LoginEmail }) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Cliente WHERE email = ?";

        db.query(sql, [LoginEmail], (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(result.length > 0);
            }
        });
    });
}

exports.SendRegisterData = async (req, res) => {
    const { LoginName, LoginEmail, LoginPassword } = req.body;

    console.log(LoginName, LoginEmail, LoginPassword);

    if (!validateEmptyFields(req.body)) {
        return res.send("Preencha todos os campos");
    }

    try {
        if (await validateDatabaseDataExist(req.body)) {
            return res.send("Email já registrado");
        }

        const sql = "INSERT INTO Cliente(nome, email, senha) VALUES(?,?,?)";

        let salt = await bcrypt.genSalt(12)
        let EncryptedPassword = await bcrypt.hash(LoginPassword,salt)

        db.query(sql, [LoginName, LoginEmail, EncryptedPassword], (err, result) => {
            if (err) {
                console.log(err);
                return res.send("Erro ao registrar os dados");
            } else {
                console.log(result);
                return res.status(201).send("Dados registrados com sucesso");
            }
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send("Erro no servidor");
    }
}
