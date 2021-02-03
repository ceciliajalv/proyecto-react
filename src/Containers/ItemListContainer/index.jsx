import { useState } from "react";
import { ItemCount } from "../../components/ItemCount";

const ItemListContainer = ({servicios},) => {
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
        if (stock == 0) {
            setBtnCompra("Sin Stock")
        }        
    }

    return (
        <>
        <ItemCount contador={contador} onAdd={onAdd} onSub={onSub} onBuy={onBuy} btnCompra={btnCompra}/>
        </>
    )
}
export default ItemListContainer;