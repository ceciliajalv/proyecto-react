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
import CartListBox from '../CartListBox/'
import { getFirestore } from "../../firebase";

const Cart = (Cproduct) => {
    const {pTotal, product, qCart} = useContext(CartContext)
    const [loading, setLoading] = useState(true);
    const [nombre, setNombre] = useState([]);
    const [correo, setCorreo] = useState([]);
    const [telefono, setTelefono] = useState([]);
    React.useEffect(()=> {
            setTimeout(() => {
                setLoading(false);
        }, 2000);    
    }, []);
    
    const HayItems = () => {
        
        if (qCart() >= 1) {
            return <>
            <div >
                <h2 className="cart">Su compra</h2>
                <CartListBox/>
                <h3 className="cart">Precio total: ${pTotal()}</h3>
                <Link to={`/customer`}><button className="cart">Confirmar Compra</button></Link>
            </div>
            
            
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
        {loading ? <div><h2>Estamos cargando sus productos...</h2><img className="loader" src={loader} alt=""/></div> : <><HayItems /></>}
        </>
        )
}
export default Cart;