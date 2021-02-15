import * as React from "react";
import { useState } from "react";
import {useParams} from "react-router-dom";
import productList from "../../mocks/productList/index"
import { ItemCount } from "../../components/ItemCount";
import ItemDetail from "../../components/itemDetail";

const ItemDetailContainer = () => {
    const {id} = useParams ();
    const [item, setItem] = useState([]);
    React.useEffect(()=>{
       const miPromesaDos = new Promise ((resolve, reject) =>{
        const producDetail = productList.find(id);
        setTimeout(() =>
            resolve(producDetail), 2000);
            
    });

    miPromesaDos.then((result) => setItem(result)); 
    }, [id]);

    return (
        <>
        <ItemDetail item={item}/>
        </>
    )
}
console.log(productList)
export default ItemDetailContainer;
