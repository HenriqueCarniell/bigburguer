// raxios
import axios from 'axios';

//css
import './formcreateaccount.css';

// react-router-dom
import { useNavigate } from 'react-router-dom';

//react
import { ChangeEvent, useState } from 'react';

//bootstrap
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormCreateAccount() {
    const [saveRegisterName, setRegisterName] = useState<string>('');
    const [saveRegisterEmail, setRegisterEmail] = useState<string>('');
    const [saveRegisterPassword, setRegisterPassword] = useState<string>('');
    const [saveMsgRegister, setMsgRegister] = useState<string>('');
    const [saveLoading, setLoading] = useState<boolean>(false)

    let HandleSaveName = (e: ChangeEvent<HTMLInputElement>): void => {
        setRegisterName(e.target.value);
    }

    let HandleSaveEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        setRegisterEmail(e.target.value);
    }

    let HandleSavePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        setRegisterPassword(e.target.value);
    }

    const navigation = useNavigate()

    let HandleSendDataBackend = async () => {
        setLoading(true);
        try {
            let response = await axios.post('https://api-bigburguer.onrender.com/send/register/data', {
                RegisterName: saveRegisterName,
                RegisterEmail: saveRegisterEmail,
                RegisterPassword: saveRegisterPassword
            })
            if (response.data.userEmailAlredyExist) {
                setMsgRegister(response.data.userEmailAlredyExist);
            } else {
                navigation('/');
            }

        } catch (err: unknown) {
            console.log(err);
        } finally {
            setLoading(false);
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
                    <Form.Control type="Name" placeholder="Digite um nome" onChange={HandleSaveName} disabled={saveLoading} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Digite um email" onChange={HandleSaveEmail} disabled={saveLoading} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha: </Form.Label>
                    <Form.Control type="password" placeholder="Digite uma senha" onChange={HandleSavePassword} disabled={saveLoading} />
                    {saveMsgRegister}
                </Form.Group>

                <div className='div-botao-register'>
                    <Button variant="primary" onClick={HandleSendDataBackend} disabled={saveLoading}>
                        {saveLoading ? (
                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                        ) : (
                            'Enviar'
                        )}
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default FormCreateAccount;