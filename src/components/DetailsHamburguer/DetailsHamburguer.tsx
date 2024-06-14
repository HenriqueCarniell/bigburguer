// axios
import axios from "axios";

// react
import { useEffect, useState } from "react";

// react-router-dom
import { useParams } from "react-router-dom";

// react icons
import { HiOutlineArrowLeft } from "react-icons/hi";

// css
import './DetailsHamburguer.css'

interface productsType {
    idproduto: number,
    nome: string,
    descricao: string,
    imagem: string,
    preco: number
}

function DetailsHamburguer() {

    const [saveDataHamburguer, setDataHamburguer] = useState<productsType[]>([]);

    const { idproduto } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/get/detailproduct/${idproduto}`)
            .then(response => {
                setDataHamburguer(response.data)
            })
    })
    return (
        <div>
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
                                <p>{item.descricao}</p>
                            </div>
                        </div>
                        <div className="div-btn-addcart">
                            <button className="primary botao-add-cart">Adicionar ao carrinho</button>
                        </div>
                    </div>
                ))
            }
        </div>

    );
}

export default DetailsHamburguer;