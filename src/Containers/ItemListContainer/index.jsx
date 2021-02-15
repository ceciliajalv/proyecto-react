import * as React from "react";
import { useState } from "react";
import { ItemCount } from "../../components/ItemCount";
import productList from "../../mocks/productList/index"
import ItemList from "../../components/itemList/"

const ItemListContainer = ({servicios},) => {
    const [products, setProducts] = useState([]);
    React.useEffect(()=>{
       const miPromesa = new Promise ((resolve, reject) =>{
        setTimeout(() =>
            resolve(productList), 2000);
    });

    miPromesa.then((result) => setProducts(result)); 
    }, []);    

    return (
        <>
        <h2>Adquirí nuestros productos</h2>
        <ItemList products={products}/>
        </>
    )
}
export default ItemListContainer;
