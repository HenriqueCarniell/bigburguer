import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { HiOutlineArrowLeft } from "react-icons/hi";

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
            <div className="div-goback">
                <a href="/"> <i><HiOutlineArrowLeft /></i> </a> 

                <p className="goback">Voltar para o inicio</p>
            </div>
            {
                saveDataHamburguer.map((item, key) => (
                    <div key={key} className='div-detail-products'>

                    </div>
                ))
            }
        </div>
    );
}

export default DetailsHamburguer;