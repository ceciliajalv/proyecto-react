import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../../components/ItemCount";
import productList from "../../mocks/productList/index"
import ItemDetail from "../itemDetail"
import {useContext} from 'react'
import {CartContext} from '../../context/cartContext/'

const CartItem = ({product}) => {
    
    return (
    <>
        <div className="d-flex flex-row">
            <h2>{product.name}</h2>
            <h3>X{product.cantidad}</h3>
            <h3>Precio: ${product.price}</h3>
            
        </div>
    </>
    )
}
export default CartItem;
// import {Link} from 'react-router-dom'
// const Item = ({product}) => {
//     return <div className="card">
//         <h5>{product.name}</h5>
//         <p>$ {product.price}</p>
//         <p>Stock: {product.stock}</p>
//         <Link to={`/productos/${product.id}`}><button>Comprar</button></Link>
//     </div>
// }
// export default Item;