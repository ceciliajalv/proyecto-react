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
        setStock(item.stock);
        if (quantity == 0) {
            setQuantity(contador);
        }
        else {
            setQuantity(contador + quantity);
        }        
        setStock(stock - contador);
        setContador(1);
        if (stock == contador) {
            setBtnCompra("Sin Stock")
        } 
        
        console.log ('Se agregaron ', contador, ' productos al carrito')
        addCart ({item: item, cantidad: contador})
        document.getElementById('terminarCompra').style.visibility = "visible";
        
    }
    console.log ([product])
return (
    <>
    <div key={item.id} product={item} onLoad={Load}>
        <h2>{item.name}</h2>
        <img src={item.foto}></img>
        <p>Descripcion: {item.descripcion}</p>
        <p>Precio: ${item.price}</p>
        <ItemCount contador={contador} onAdd={onAdd} onSub={onSub} onBuy={onBuy} btnCompra={btnCompra} stock={stock}/>
        <div id='terminarCompra'>
            <p>Usted esta adquiriendo {quantity} {item.name}</p>
            <Link to={`/cart`} quantity={quantity}><button>Terminar compra</button></Link> 
        </div>
    </div>
    </>
)
}

export default ItemDetail;
