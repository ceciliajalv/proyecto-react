import * as React from "react";
import {useContext} from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../../components/ItemCount";
import productList from "../../mocks/productList/index";
import {useParams} from "react-router-dom";
import {CartContext} from '../../context/cartContext/'

const ItemDetail = ({item}) => {
    const [contador, setContador] = useState(1)
    const [stock, setStock] = useState(1)
    const [btnCompra, setBtnCompra] = useState("Comprar")
    const [quantity, setQuantity] = useState (0)

    const { addCart , product} = useContext(CartContext)

    const Load = () => {
        setStock(item.stock)
    }
    const onAdd = () => {
        if (contador < stock) {
            setContador(contador + 1);  
        }
    }
    const onSub = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }
    const onBuy = () => {
        debugger
        setStock(item.stock);
        setQuantity(contador);
        // if (quantity == 0) {
        //     setQuantity(contador);
        // }
        // else {
        //     setQuantity(contador + quantity);
        // }        
        setStock(stock - contador);
        setContador(1);
        if (stock == contador) {
            setBtnCompra("Sin Stock")
        } 
        
        console.log ('Se agregaron ', contador, ' productos al carrito');
        addCart ({item: item, cantidad: contador, price: item.price, name: item.name, id: item.id});
        document.getElementById('terminarCompra').style.visibility = "visible";
    }
    console.log ([product])
    
return (
    <>
    <div key={item.id} product={item} onLoad={Load} className="d-flex flex-column justify-content-around itemDetail">
        <h2>{item.name}</h2>
        <div className="d-flex flex-row justify-content-between">
            <img src={item.foto}></img>
            <div className="d-flex flex-column justify-content-between">
               
                <p>Precio: ${item.price}</p>
                <ItemCount contador={contador} onAdd={onAdd} onSub={onSub} onBuy={onBuy} btnCompra={btnCompra} stock={stock}/>
                <div id='terminarCompra' className="d-flex flex-column justify-items-center confirmaCompra">
                    <p>Se han agregado exitosamente {quantity} {item.name} al carrito</p>
                    <Link to={`/cart`} quantity={quantity}><button className='confirmar'>Terminar compra</button></Link> 
                </div>
            </div>            
        </div>
        <p>Descripcion: {item.descripcion}</p>
    </div>
    </>
)
}

export default ItemDetail;
