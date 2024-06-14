import axios from "axios";
import Header from "../header/header";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface typeProducts {
    idproduto: number,
    nome: string,
    imagem: string,
    descricao: string,
    preco: number
}

function Cart() {
    const [saveCartData, setCartData] = useState<typeProducts[]>([])

    useEffect(() => {
        axios.get(`http://localhost:4000/get/cart/product/`)
            .then((response) => {
                setCartData(response.data);
                console.log(response.data);
            })
            .catch((err:unknown) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                Carrinho de compras
            </div>

            <div>
            {
                saveCartData.map((item, key) => (
                    <div key={key} className=''>
                        <Card style={{ width: '18rem', height: '26rem' }}>
                            <Card.Body>
                                <Card.Img variant="top" src={item.imagem} alt={item.nome} style={{ width: '15rem', height: '15rem' }} />
                                <Card.Title>{item.nome}</Card.Title>
                                <Card.Text>
                                    {item.descricao}
                                </Card.Text>
                                    <Button variant="primary" style={{ width: '100%' }}>Comprar</Button>
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