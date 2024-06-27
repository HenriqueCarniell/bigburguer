//css
import './DetailsHamburguer.css';

//react
import { useEffect, useState } from "react";

// react-router-dom
import { useParams } from "react-router-dom";

//axios
import axios from "axios";

//react-icons
import { HiOutlineArrowLeft } from "react-icons/hi";

//tast
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//bootstrap
import { Spinner } from 'react-bootstrap';

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
    const [saveLoading, setLoading] = useState<boolean>(false);
    const { idproduto } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/get/detailproduct/${idproduto}`)
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
        setLoading(true)
        try {
            axios.get(`http://localhost:4000/add/cart/product/${idproduto}/${saveIdUsuario}`, config)
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        toast.success('Produto adicionado no carrinho com sucesso', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                    }
                })
        }
        catch (error: unknown) {
            console.log(error);
        } finally {
            setLoading(false);
        }

        if (!saveIdUsuario) {
            toast.error('Você precisa estar logado para adicionar um produto ao carrinho', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
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
                            <button className="primary botao-add-cart" onClick={() => HandleSaveProductCart(item.idproduto)} disabled={saveLoading}>
                                {saveLoading ? (
                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                ) : (
                                    'Adicionar ao carrinho'
                                )}
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default DetailsHamburguer;
