const jwt = require('jsonwebtoken');
const jwtData = require('../auth/auth');
const db = require('../database/bd');
const bcrypt = require('bcrypt');

let validateEmptyFields = ({ LoginEmail, LoginPassword }) => {
    return LoginEmail && LoginPassword;
}

let validateDatabaseFields = (LoginEmail) => {
    return new Promise((resolve, reject) => {
        const sql = "select * from Cliente where email = ?";

        db.query(sql, [LoginEmail], (err, result) => {
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

    console.log(LoginEmail, LoginPassword)

    if (!validateEmptyFields(req.body)) {
        return res.json({ msg: "Preencha todos os campos" });
    }

    let user = await validateDatabaseFields(LoginEmail);

    console.log(user);

    if (user) {
        let comparePassword = await bcrypt.compare(LoginPassword, user.senha);

        if (comparePassword) {
            const token = jwt.sign(
                {
                    id: user.idcliente
                },
                jwtData.jwt.secret,
            );

            res.status(201).json({ token: token, idusuario: user.idcliente, logado: true });

        } else {
            return res.json({ user: "Email ou senha incorretos", logado: false });
        }
    } else {
        return res.json({ user: "Email ou senha incorretos", logado: false });
    }


}
