import * as React from "react";
import { useState } from "react";
import { ItemCount } from "../../components/ItemCount";
import productList from "../../mocks/productList/index"
import CartList from "../../components/CartList/"
import ItemList from "../../components/itemList/"
import {CartContext} from '../../context/cartContext/'
import {useContext} from 'react'

const CartListBox = ({servicios},) => {
    const {pTotal, product, qCart} = useContext(CartContext)
    const [cartProds, setCartProds] = useState([]);
    React.useEffect(()=>{
       const miPromesa = new Promise ((resolve, reject) =>{
        setTimeout(() =>
            resolve(product), 200);
    });

    miPromesa.then((result) => setCartProds(result)); 
    }, []);    

    return (
        <>
        <div className='listContainerCart'>
        <h2>Adquirí nuestros productos</h2>
            <CartList cartProds={cartProds}/>
        </div>
        
        </>
    )
}
export default CartListBox;
