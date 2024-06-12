import './main.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Main() {
    interface typeProducts {
        idproduto: number,
        nome: string,
        imagem: string,
        descricao: string,
        preco: number
    }

    const [saveDataProducts, setDataProducts] = useState<typeProducts[] >([])

    useEffect(() => {
        axios.get('http://localhost:4000/get/all/products')
            .then((response) => {
                setDataProducts(response.data)
            })
    }, [])

    let getId = (idproduto:number):void => {
            axios.get(`http://localhost:4000/get/product/${idproduto}`)
    }
    return (
        <div className='div-all-itens-product'>
            {
                saveDataProducts.map((item, key) => (
                    <div key={key} className='div-itens-product'>
                        <Card style={{ width: '18rem', height: '26rem' }}>
                            <Card.Body>
                                <Card.Img variant="top" src={item.imagem} alt={item.nome} style={{ width: '15rem', height: '15rem' }} />
                                <Card.Title>{item.nome}</Card.Title>
                                <Card.Text>
                                    {item.descricao}
                                </Card.Text>
                                <Button variant="primary" style={{ width: '100%' }} onClick={() => getId(item.idproduto)}>Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
}

export default Main;