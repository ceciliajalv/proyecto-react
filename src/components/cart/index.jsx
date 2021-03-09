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
    const finalizarCompra = () => {
        
        // document.getElementById("terminarCompra").style.visibility = "visible";
        console.log(product)
        let newOrder = {buyer: {name: nombre, email: correo, telefono:telefono}, items: [...product], total: [pTotal()] };
        const baseDeDatos = getFirestore(); 
        const OrdenesCollection = baseDeDatos.collection("ordenes"); 
        OrdenesCollection.add(newOrder)
        // const itemDoc = itemCollection.doc(id)
        // itemDoc.get().then((doc) => {
        //     if (!doc.exists) {
        //         console.log('No existe el item');
        //         return;
        //     }
        //     console.log('item encontrado');
        //     setItem({id: doc.id, ...doc.data()});
        // }).catch((error) => {
        //    console.log("Error en la busqueda de items", error);
        // }) 
    }
    React.useEffect(()=> {
            setTimeout(() => {
                setLoading(false);
        }, 2000);    
    }, []);
    const HayItems = () => {
        if (qCart() >= 1) {
            return <>
            <h2>Su compra</h2>
            <CartListBox/>
            <h3>Precio total: ${pTotal()}</h3>
            <div id='confirmarCompra'>
                <input type="text" placeholder="Nombre Completo" onBlur={(e) => {setNombre(e.target.value)}}/>
                <input type="text" placeholder="Correo Electrónico" onBlur={(e) => {setCorreo(e.target.value)}}/>
                <input type="text" placeholder="Teléfono" onBlur={(e) => {setTelefono(e.target.value)}}/>
                
            </div>
            <button onClick={() =>{finalizarCompra()}} >Confirmar compra</button>
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
        {loading ? <div><h2>Estamos cargando sus productos...</h2><img src={loader} alt=""/></div> : <HayItems /> }
        </>
        )
}
export default Cart;