// CSS
import './sidebar.css';

//bootstrap
import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBookBookmark, FaCartShopping } from 'react-icons/fa6';


function OffCanvasExample({ show, setShow, children, ...props }: any) {
    const handleClose = () => setShow(false);

    const [userStatusString, setUserStatusString] = useState<boolean | string | null>(null);

    let logout = (): void => {
        localStorage.removeItem('logado');
        localStorage.removeItem('idusuario');
        localStorage.removeItem('token');
        setUserStatusString(null);
    }

    useEffect(() => {
        const status = localStorage.getItem('logado');
        setUserStatusString(status);
    }, []);

    return (
        <>
            <div onClick={() => setShow(true)}>
                {children}
            </div>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='div-list-itens-sidebar'>
                        <ul className='ul-list-itens-sidebar'>
                            <li><a href="/"><FaCartShopping />Home</a></li>
                            <li><FaBookBookmark />Pedido</li>
                            <li>
                                <a href="/carrinho"><FaCartShopping />Carrinho</a></li>
                            <li>
                                {
                                    userStatusString ? <button className='btn btn-primary' onClick={() => logout()}>Sair da conta</button> : <a href="/login">Login</a>
                                }
                            </li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasExample