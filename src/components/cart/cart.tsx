//css
import './cart.css';

import axios from "axios";
import Header from "../header/header";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

interface typeProducts {
    idproduto: number,
    nome: string,
    imagem: string,
    descricao: string,
    preco: number
}

function Cart() {
    const [saveCartData, setCartData] = useState<typeProducts[]>([]);
    const [saveIdUsuario, setIdUsuario] = useState<string | null>('');
    const [saveTotalPrice, setTotalPrice] = useState<number | null>(0);

    useEffect(() => {
        let idusuario = localStorage.getItem('idusuario');
        setIdUsuario(idusuario);
    }, []);

    useEffect(() => {
        axios.get(`https://api-bigburguer.onrender.com/get/cart/product/${saveIdUsuario}`)
            .then((response) => {
                setCartData(response.data.products);
                setTotalPrice(response.data.total_preco);
                console.log(response.data);
            })
            .catch((err: unknown) => {
                console.log(err);
            });
    }, [saveIdUsuario]);

    let token = localStorage.getItem('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const handleDeleteProductCart = (idproduto: number): void => {
        axios.delete(`https://api-bigburguer.onrender.com/delete/product/${idproduto}/${saveIdUsuario}`, config)
            .then(() => {
                const updatedCartData = saveCartData.filter(item => item.idproduto !== idproduto);
                const updatedTotalPrice = updatedCartData.reduce((acc, item) => acc - item.preco, 0);
                setCartData(updatedCartData);
                setTotalPrice(-updatedTotalPrice);
            })
            .catch((err: unknown) => {
                console.log(err);
            });
    }

    return (
        <div className='container-cart-item'>
            <div>
                <Header />
            </div>
            <div>
                <p className='title-cart-name'>Carrinho de compras</p>
            </div>

            <div className='div-cart-price'>
                <p className='title-cart-price'>Preço total do carrinho: </p>

                <div className='div-price'>
                    <i>R$ {saveTotalPrice}</i>
                </div>
            </div>

            <div className='div-cart-products'>
                {
                    saveCartData.map((item, key) => (
                        <div key={key} className='cart-item'>
                            <Card style={{ width: '18rem', height: '32rem' }}>
                                <Card.Body>
                                    <Card.Img variant="top" src={item.imagem} alt={item.nome} style={{ width: '15rem', height: '15rem' }} />
                                    <Card.Title>{item.nome}</Card.Title>
                                    <Card.Text>
                                        {item.descricao}
                                    </Card.Text>
                                    <Card.Text>
                                        R$ {item.preco}
                                    </Card.Text>
                                    <Button variant="primary" style={{ width: '100%', marginBottom: '1rem' }}>Comprar</Button>
                                    <Button variant="danger" style={{ width: '100%' }} onClick={() => handleDeleteProductCart(item.idproduto)}>Deleter do carrinho</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Cart;