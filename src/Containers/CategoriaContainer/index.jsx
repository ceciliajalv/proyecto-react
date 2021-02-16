import * as React from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom';
import { ItemCount } from "../../components/ItemCount";
import productList from "../../mocks/productList/index"
import ItemList from "../../components/itemList/"

const CategoriaContainer = () => {
    const {idCat} = useParams ();
    const [products, setProducts] = useState([]);
    React.useEffect(()=>{
        let categoria = productList.filter ( (element) => {
            return element.categoria === idCat
        });
        setProducts(categoria);
    }, [idCat]) 

    return (
        <>
        <h2>Adquirí nuestros productos de {idCat}</h2>
        <ItemList products={products}/>
        </>
    )
}
export default CategoriaContainer;
