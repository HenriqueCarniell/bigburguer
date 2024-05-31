import axios from 'axios';
import './FormCreateAccount.css';

import { ChangeEvent, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormCreateAccount() {
    const [saveRegisterName, setRegisterName] = useState<string>('');
    const [saveRegisterEmail, setRegisterEmail] = useState<string>('');
    const [saveRegisterPassword, setRegisterPassword] = useState<string>('');
    const [saveMsgRegister, setMsgRegister] = useState<string>('')

    let HandleSaveName = (e: ChangeEvent<HTMLInputElement>): void => {
        setRegisterName(e.target.value);
    }

    let HandleSaveEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        setRegisterEmail(e.target.value);
    }

    let HandleSavePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        setRegisterPassword(e.target.value);
    }

    let HandleSendDataBackend = () => {
        try {
            axios.post('http://localhost:4000/send/register/data', {
                RegisterName: saveRegisterName,
                RegisterEmail: saveRegisterEmail,
                RegisterPassword: saveRegisterPassword
            }).then((response: any) => {
                setMsgRegister(response.data)
            })
        } catch (err: unknown) {
            console.log(err);
        }
    }

    return (
        <div className='div-form-register'>
            <Form className='form-register'>
                <div className='div-form-register-title'>
                    <h1>Criar conta</h1>
                </div>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="Name" placeholder="Digite um nome" onChange={HandleSaveName} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Digite um email" onChange={HandleSaveEmail} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha: </Form.Label>
                    <Form.Control type="password" placeholder="Digite uma senha" onChange={HandleSavePassword} />
                    {saveMsgRegister}
                </Form.Group>

                <div className='div-botao-register'>
                    <Button variant="primary" onClick={HandleSendDataBackend}>
                        Enviar
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default FormCreateAccount;