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

function Header() {
    return (
        <div className="div-header">
            <div className='div-input-header'>
                <div className="header-container">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><CiSearch/></InputGroup.Text>
                        <Form.Control
                            placeholder="Digite o nome de um produto"
                            aria-label="Digite o nome de um produto"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </div>

                <div className='div-list-navbar'>
                    <ul className='list-itens-navbar'>
                        <li><MdHome />Home</li>
                        <li><FaBookBookmark />Pedido</li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                        <li><FaCartShopping />Carrinho</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;