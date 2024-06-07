const jwt = require('jsonwebtoken');
const authConfig = require('../auth');

let ensureAuthenticated = (req, res, next) => {
    const sessionCookie = req.cookies.userSession;
    
    if (sessionCookie) {
        const { id, token } = sessionCookie;
        jwt.verify(token, jwtData.jwt.secret, (err, decoded) => {
            if (err) {
                return res.status(401).json({ logado: false, mensagem: "Sessão inválida" });
            } else {
                req.session.user = { id: id, token: token };
                next();
            }
        });
    } else {
        return res.status(401).json({ logado: false, mensagem: "Não autenticado" });
    }
}

module.exports = ensureAuthenticated;