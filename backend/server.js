const express = require('express');
const app = express();
const routes = require('./routes/routes');
const cors = require('cors');
const session = require('express-session');
const secret = require('./auth/auth');
const porta = 4000;

app.use(session({
    secret: secret.jwt.secret,
    resave: false,
    saveUninitialized: true
}));

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});