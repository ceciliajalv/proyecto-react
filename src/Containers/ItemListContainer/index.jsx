import * as React from "react";
import { useState } from "react";
import { ItemCount } from "../../components/ItemCount";
import productList from "../../mocks/productList/index"
import ItemList from "../../components/itemList/"

const ItemListContainer = ({servicios},) => {
    const [products, setProducts] = useState([]);
    React.useEffect(()=>{
       const miPromesa = new Promise ((resolve, reject) =>{
        setTimeout(() =>
            resolve(productList), 2000);
    });

    miPromesa.then((result) => setProducts(result)); 
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
        <ItemList products={products}/>
        <ItemCount contador={contador} onAdd={onAdd} onSub={onSub} onBuy={onBuy} btnCompra={btnCompra}/>
        </>
    )
}
export default ItemListContainer;
