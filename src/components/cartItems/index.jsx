import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../../components/ItemCount";
import productList from "../../mocks/productList/index"
import ItemDetail from "../itemDetail"
import {useContext} from 'react'
import {CartContext} from '../../context/cartContext/'

const CartItem = ({cartProd}) => {
    const {deleteProd, pTotal, product, qCart} = useContext(CartContext)
    return (
    <>
        <div className="d-flex flex-row cardCart justify-content-between">
            {/* <h2>{cartProd.name}</h2>
            <input type="number" value={cartProd.cantidad}/>
            <h3>Precio: ${cartProd.price}</h3> */}
            {/* <div className="d-flex flex-column">
                <h3 className="titleCart">Nombre cartProdo</h3>
                <div className="d-flex flex-row">
                    <h4 className="dato-compra">Cantidad: 3</h4>
                    <h4 className="dato-compra">Precio unitario: $30</h4>
                </div>
                <h4 className="delete-item">Eliminar cartProdo</h4>
                
            </div> */}
            <div className="d-flex flex-column">
                <h3 className="titleCart">{cartProd.name}</h3>
                <div className="d-flex flex-row">
                    <h4 className="dato-compra">Cantidad: {cartProd.cantidad}</h4>
                    <h4 className="dato-compra">Precio unitario: ${cartProd.price}</h4>
                </div>
                <h4 className="delete-item" onClick={() => deleteProd(cartProd)}>Eliminar producto</h4>
                
            </div>
            
            <div className="d-flex flex-column">
                <h4>Subtotal</h4>
                <h3 className="totalProd d-flex align-self-center">${cartProd.price*cartProd.cantidad}</h3>
            </div>            
            
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