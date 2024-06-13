//css
import './main.css'

//react
import { useEffect, useState } from 'react'

//axios
import axios from 'axios'

//bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

interface typeProducts {
    idproduto: number,
    nome: string,
    imagem: string,
    descricao: string,
    preco: number
}

function Main() {

    const [saveDataProducts, setDataProducts] = useState<typeProducts[]>([])

    useEffect(() => {
        axios.get('http://localhost:4000/get/all/products')
            .then((response) => {
                setDataProducts(response.data)
            })
    }, [])

    let getId = (idproduto: number): void => {
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
                                <Link to={`/hamburguer/${item.idproduto}`} >
                                    <Button variant="primary" style={{ width: '100%' }}>Comprar</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
}

export default Main;