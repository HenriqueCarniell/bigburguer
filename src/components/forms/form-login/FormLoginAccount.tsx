import './FormLoginAccount.css';

import { ChangeEvent, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormLoginAccount() {
    
    const [saveRegisterEmail, setRegisterEmail] = useState<string>('');
    const [saveRegisterPassword, setRegisterPassword] = useState<string>('');

    let HandleSaveEmail = (e:ChangeEvent<HTMLInputElement>):void => {
        setRegisterEmail(e.target.value);
    }

    let HandleSavePassword = (e:ChangeEvent<HTMLInputElement>):void => {
        setRegisterPassword(e.target.value);
    }

    return (
        <div className='div-form-login'>
            <Form className='form-login'>
                <div className='div-form-login-title'>
                    <h1>Login</h1>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Digite um email" onChange={HandleSaveEmail}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha: </Form.Label>
                    <Form.Control type="password" placeholder="Digite uma senha" onChange={HandleSavePassword}/>
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
