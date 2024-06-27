//axios
import axios from 'axios';

//css
import './formloginaccount.css';

//react
import { ChangeEvent, useState } from 'react';

//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

//react-router-dom
import { useNavigate } from 'react-router-dom';

function FormLoginAccount() {

    const [saveLoginEmail, setLoginEmail] = useState<string>('');
    const [saveLoginPassword, setLoginPassword] = useState<string>('');
    const [saveMsgLogin, setMsgLogin] = useState<string>('');
    const [saveLoading, setIsLoading] = useState<boolean>(false);

    let HandleSaveEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        setLoginEmail(e.target.value);
    }

    let HandleSavePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        setLoginPassword(e.target.value);
    }

    const navigate = useNavigate();

    const HandleSendDataBackend = async () => {
        setIsLoading(true);
        try {
            let response = await axios.post('https://api-bigburguer.onrender.com/send/login/data', {
                LoginEmail: saveLoginEmail,
                LoginPassword: saveLoginPassword
            });
            console.log(response)

            if (response.data.logado === true) {
                localStorage.setItem('logado', JSON.stringify(true));
                localStorage.setItem('idusuario', JSON.stringify(response.data.idusuario));
                localStorage.setItem('token', JSON.stringify(response.data.token));

                navigate('/');
            } else {
                setMsgLogin(response.data.user);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
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
                    <Form.Control type="email" placeholder="Digite um email" onChange={HandleSaveEmail} disabled={saveLoading} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha: </Form.Label>
                    <Form.Control type="password" placeholder="Digite uma senha" onChange={HandleSavePassword} disabled={saveLoading} />
                </Form.Group>
                {saveMsgLogin}
                <p>Não possui uma conta ? <a href="/criarconta">Crie Uma</a></p>
                <div className='div-botao-login'>
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

export default FormLoginAccount;
