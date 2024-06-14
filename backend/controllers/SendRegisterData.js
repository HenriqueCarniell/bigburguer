const db = require('../database/bd');
const bcrypt = require('bcrypt');

let validateEmptyFields = ({ RegisterName, RegisterEmail, RegisterPassword }) => {
    return RegisterName && RegisterEmail && RegisterPassword;
}

let validateDatabaseDataExist = ({ RegisterEmail }) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Cliente WHERE email = ?";

        db.query(sql, [RegisterEmail], (err, result) => {
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
    const { RegisterName, RegisterEmail, RegisterPassword } = req.body;

    if (!validateEmptyFields(req.body)) {
        return res.send("Preencha todos os campos");
    }

    try {
        if (await validateDatabaseDataExist(req.body)) {
            return res.json({userEmailAlredyExist:"Email já registrado", Exist: true});
        }

        const sql = "INSERT INTO Cliente(nome, email, senha) VALUES(?,?,?)";

        let salt = await bcrypt.genSalt(12);
        let EncryptedPassword = await bcrypt.hash(RegisterPassword,salt);

        db.query(sql, [RegisterName, RegisterEmail, EncryptedPassword], (err, result) => {
            if (err) {
                console.log(err);
                return res.json("Erro ao registrar os dados");
            } else {
                console.log(result);
                return res.json({userInsert: true});
            }
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send("Erro no servidor");
    }
}
