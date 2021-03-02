import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../../components/ItemCount";
import productList from "../../mocks/productList/index"
import ItemDetail from "../itemDetail"
import {useContext} from 'react'
import {CartContext} from '../../context/cartContext/'
import CartItem from '../cartItems/'
import CartList from '../CartList/'
import loader from '../../mocks/productList/img/loading-02.gif'

const Cart = (Cproduct) => {
    const {pTotal, product, qCart} = useContext(CartContext)
    const [loading, setLoading] = useState(true);      
    React.useEffect(()=> {
            setTimeout(() => {
                setLoading(false);
        }, 2000);    
    }, []);
    const HayItems = () => {
        if (qCart() >= 1) {
            return <>
            <h2>Su compra</h2>
            <p>Aca se van a ver los productos cuando logre configurarlo...</p>
            <h3>Precio total: ${pTotal()}</h3>
            <button>Confirmar compra</button>
            </>
        } else {
            return <>
             <h2>No hay items en su carrito</h2>
             <Link to={`/productos`}><h3>Volver a lista de productos</h3> </Link>
             <Link to={`/categoria/vip`}><h3>Comprar paquetes VIP</h3></Link>
             <Link to={`/categoria/merch`}><h3>Comprar Merchandising</h3></Link>
             </>
        }
    }
    return (
        <>  
        {loading ? <div><h2>Estamos cargando sus productos...</h2><img src={loader} alt=""/></div> : <HayItems/> }
        </>
        )
}
export default Cart;