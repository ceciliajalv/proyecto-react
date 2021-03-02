import carritoIcon from '../CartWidget/carritoIcon.png';
import {useContext} from 'react'
import {CartContext} from '../../context/cartContext/'
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { qCart } = useContext(CartContext) 
    const qView = () => {
        if (qCart() > 0) {
            return <Link to={`/cart`}><div className="carritoicon d-flex flex-row"><img src={carritoIcon} alt="Carrito" className="carritoicon"/><p>{qCart()}</p></div></Link>
        }
    }
    return (
        <>
        {qView()}
        </>
        
    )
}

export default CartWidget;