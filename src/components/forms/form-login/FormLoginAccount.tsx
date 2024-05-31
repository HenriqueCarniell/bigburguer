import axios from 'axios';
import './FormLoginAccount.css';

import { ChangeEvent, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormLoginAccount() {

    const [saveLoginEmail, setLoginEmail] = useState<string>('');
    const [saveLoginPassword, setLoginPassword] = useState<string>('');

    let HandleSaveEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        setLoginEmail(e.target.value);
    }

    let HandleSavePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        setLoginPassword(e.target.value);
    }

    let HandleSendDataBackend = () => {
        try {
            axios.post('http://localhost:4000/send/login/data', {
                LoginEmail: saveLoginEmail,
                LoginPassword: saveLoginPassword
            }).then((response: any) => {
                console.log(response)
            })
        } catch (err: unknown) {
            console.log(err);
        }
    }

return (
    <div className='div-form-login'>
        <Form className='form-login'>
            <div className='div-form-login-title'>
                <h1>Login</h1>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Digite um email" onChange={HandleSaveEmail} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha: </Form.Label>
                <Form.Control type="password" placeholder="Digite uma senha" onChange={HandleSavePassword} />
            </Form.Group>
            <p>Não possui uma conta ? <a href="/criarconta">Crie Uma</a></p>
            <div className='div-botao-login'>
                <Button variant="primary">
                    Enviar
                </Button>
            </div>
        </Form>
    </div>
);
}

export default FormLoginAccount;
