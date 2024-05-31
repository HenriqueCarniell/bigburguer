let validateEmptyFields= ({LoginName, LoginEmail, LoginPassword}) => {
    if(!LoginName || !LoginEmail || !LoginPassword) {
        return false
    }
}

exports.SendRegisterData = (req,res) => {
    const {LoginName} = req.body;
    const {LoginEmail} = req.body;
    const {LoginPassword} = req.body;

    if(validateEmptyFields(req.body) === false) {
        return res.status(400).send("Preencha todos os campos");
    }

    console.log(LoginName, LoginEmail, LoginPassword)
}