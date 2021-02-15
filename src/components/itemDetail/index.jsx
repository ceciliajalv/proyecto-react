import * as React from "react";
import { useState } from "react";
import { ItemCount } from "../../components/ItemCount";
import productList from "../../mocks/productList/index"

const ItemDetail = ({item}) => {
    

    const [contador, setContador] = useState(1)
    const [stock, setStock] = useState(10)
    const [btnCompra, setBtnCompra] = useState("Comprar")
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
        setStock(stock - contador);
        setContador(1)
        if (stock == contador) {
            setBtnCompra("Sin Stock")
        }        
    }
return (
    <>
    <div key={item.id} product={item}>
        <h2>{item.name}</h2>
        <img src={item.foto}></img>
        <p>Descripcion: {item.descripcion}</p>
        <p>Precio: ${item.price}</p>
        <ItemCount contador={contador} onAdd={onAdd} onSub={onSub} onBuy={onBuy} btnCompra={btnCompra} stock={stock}/>
    </div>
    </>
)
}

export default ItemDetail;
