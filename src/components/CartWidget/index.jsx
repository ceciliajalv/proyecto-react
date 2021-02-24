import carritoIcon from '../CartWidget/carritoIcon.png';
import {useContext} from 'react'
import {cartContext} from '../../context/cartContext/'

const CartWidget = () => {
    // const { qItems } = useContext(cartContext) 
    return (
        <div className="carritoicon"><img src={carritoIcon} alt="Carrito" className="carritoicon"/></div>
    )
}

export default CartWidget;