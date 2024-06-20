//css
import './DetailsHamburguer.css';

// React
import { useEffect, useState } from "react";

//UseParams
import { useParams } from "react-router-dom";

//axios
import axios from "axios";

// React Icons
import { HiOutlineArrowLeft } from "react-icons/hi";

// useToast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface productsType {
    idproduto: number,
    nome: string,
    descricao: string,
    imagem: string,
    preco: number
}

function DetailsHamburguer() {
    const [saveDataHamburguer, setDataHamburguer] = useState<productsType[]>([]);
    const [saveIdUsuario, setIdUsuario] = useState<string | null>('');
    const { idproduto } = useParams();

    useEffect(() => {
        axios.get(`https://api-bigburguer.onrender.com/get/detailproduct/${idproduto}`)
            .then(response => {
                setDataHamburguer(response.data)
            });
    }, [idproduto]);

    useEffect(() => {
        let idusuario = localStorage.getItem('idusuario');
        setIdUsuario(idusuario);
    }, []);

    const token = localStorage.getItem('token');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    let HandleSaveProductCart = (idproduto: number): void => {
        axios.get(`https://api-bigburguer.onrender.com/add/cart/product/${idproduto}/${saveIdUsuario}`, config)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    toast.success("Produto adicionado ao carrinho com sucesso!")
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <ToastContainer />
            {
                saveDataHamburguer.map((item, key) => (
                    <div key={key} className='div-detail-products'>
                        <div className="div-goback">
                            <a href="/"> <i><HiOutlineArrowLeft /></i><p className="goback">Voltar para o inicio</p></a>
                        </div>
                        <div className="div-image-desc">
                            <div className="image-detailhamburguer">
                                <img src={`${item.imagem}`} alt="" />
                            </div>

                            <div className="desc">
                                <div>
                                    <h1>{item.nome}</h1>
                                </div>
                                <div className="div-desc">
                                    <p>Descrição: {item.descricao}</p>
                                </div>
                                <div className="div-price">
                                    <p>R$ {item.preco}</p>
                                </div>
                            </div>
                        </div>
                        <div className="div-btn-addcart">
                            <button className="primary botao-add-cart" onClick={() => HandleSaveProductCart(item.idproduto)}>Adicionar ao carrinho</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default DetailsHamburguer;
