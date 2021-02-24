import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../../components/ItemCount";
import productList from "../../mocks/productList/index"
import ItemDetail from "../itemDetail"
import {useContext} from 'react'
import {CartContext } from '../../context/cartContext'
const Cart = () => {
    const CartContextUse = useContext(CartContext)
    
    return (
    <>
        <div>
            <h2>Tu compra:</h2>
        </div>
    </>
    )
}
export default Cart;