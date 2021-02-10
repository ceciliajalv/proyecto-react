import * as React from "react";
import { useState } from "react";
import productList from "../../mocks/productList/index"
import { ItemCount } from "../../components/ItemCount";
import ItemDetail from "../../components/itemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    React.useEffect(()=>{
       const miPromesaDos = new Promise ((resolve, reject) =>{
        setTimeout(() =>
            resolve(productList[2]), 2000);
    });

    miPromesaDos.then((result) => setItem(result)); 
    }, []);
    
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
        <ItemDetail item={item}/>
        <ItemCount contador={contador} onAdd={onAdd} onSub={onSub} onBuy={onBuy} btnCompra={btnCompra}/>
        </>
    )
}
console.log(productList)
export default ItemDetailContainer;
