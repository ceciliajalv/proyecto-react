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

const Customer = (Cproduct) => {
    const {pTotal, product, qCart, clearCart} = useContext(CartContext)
    const [loading, setLoading] = useState(true);
    const [nombre, setNombre] = useState([]);
    const [correo, setCorreo] = useState([]);
    const [conCorreo, setConCorreo] = useState([]);
    const [telefono, setTelefono] = useState([]);
    const [order, setOrder] = useState([]);
    const finalizarCompra = () => {
            if (correo == conCorreo) {
                console.log(product)
                let newOrder = {buyer: {name: nombre, email: correo, telefono:telefono}, items: [...product], total: [pTotal()] };
                const baseDeDatos = getFirestore(); 
                const OrdenesCollection = baseDeDatos.collection("ordenes"); 
                OrdenesCollection.add(newOrder).then((value) => {
                    console.log('nro de orden', value.id);
                    setOrder(value.id);
                })
                document.getElementById("orderConfirm").style.visibility = "visible";
                document.getElementById("dataCustomer").style.visibility = "hidden";
                document.getElementById("errormail").style.visibility = "hidden";
                clearCart();
            }
            else {
                document.getElementById("errormail").style.visibility = "visible";
            }
        // 
        
        // const itemCollection = baseDeDatos.collection("item"); 
        // const itemDoc = itemCollection.doc(id)
        // itemCollection.doc(itemDoc).update({stock: })
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

    return (
        <>  
        <div id="dataCustomer">
            <h2>Datos del comprador</h2>
            <div id='confirmarCompra' className='d-flex flex-column align-items-center'>
            <form className='d-flex flex-column align-items-center' action="">
                <input type="text" placeholder="Nombre Completo" required className='datoContacto' onBlur={(e) => {setNombre(e.target.value)}}/>
                <input type="text" placeholder="Teléfono" required className='datoContacto' onBlur={(e) => {setTelefono(e.target.value)}}/>
                <input type="email" placeholder="Correo Electrónico" required className='datoContacto' onBlur={(e) => {setCorreo(e.target.value)}}/>
                <input type="email" placeholder="Confirme su correo Electrónico" required className='datoContacto' onBlur={(e) => {setConCorreo(e.target.value)}}/>
                <p id="errormail">Los correos no coinciden</p>
                </form>
                <button onClick={() =>{finalizarCompra()}} >Terminar Pedido</button>
            </div>
         </div>
         <div id="orderConfirm">
            <h2 >¡Muchas Gracias por su compra, {nombre}!</h2>
            <h3>Estará recibiendo un email de confirmación en {correo} a la brevedad</h3>
            <h4>Su número de orden es: {order}</h4>


         </div>
        </>
        )
}
export default Customer;