//css
import './header.css'

//react icons
import { CiSearch } from "react-icons/ci";
import { MdHome } from "react-icons/md";
import { FaBookBookmark } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext, useEffect, useState } from 'react';
import OffCanvasExample from '../sidebar/sidebar'
import { BsJustify } from "react-icons/bs";

//Context
import { SearchContext } from '../../context/searchContext';


function Header() {
    const [userStatusString, setUserStatusString] = useState<boolean | string | null>(null);
    const { setSearchTerm } = useContext(SearchContext);

    const [show, setShow] = useState(false);


    let logout = (): void => {
        localStorage.removeItem('logado');
        localStorage.removeItem('idusuario');
        localStorage.removeItem('token');
        setUserStatusString(null)
    }

    useEffect(() => {
        const status = localStorage.getItem('logado');
        setUserStatusString(status);
    }, []);

    return (
            <div className="div-header">
                <div className='div-input-header'>
                    <div className="header-container">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><CiSearch /></InputGroup.Text>
                            <Form.Control
                                placeholder="Digite o nome de um produto"
                                aria-label="Digite o nome de um produto"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </InputGroup>
                    </div>

                    <div className='div-list-navbar'>
                        <ul className='list-itens-navbar'>
                            <li>
                                <a href="/"><MdHome />Home</a>
                            </li>
                            <li><FaBookBookmark />Pedido</li>
                            <li>
                                {
                                    userStatusString ? <button className='btn btn-primary' onClick={() => logout()}>Sair</button> : <a href="/login">Login</a>
                                }
                            </li>
                            <li><a href="/carrinho"><FaCartShopping />Carrinho</a></li>
                            <li>
                                <OffCanvasExample show={show} setShow={setShow} placement="end">
                                    <BsJustify size="30px" />
                                </OffCanvasExample>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}

export default Header;
