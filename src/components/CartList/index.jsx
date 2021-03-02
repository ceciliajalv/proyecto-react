import CartItem from "../cartItems/"
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/cartContext/'
import {useContext} from 'react'

const CartList = ({cartProds}) => {
    const {pTotal, product, qCart} = useContext(CartContext)
    return (
        <div className="listProd">
            {cartProds.map((cartProd)=> {
                return <>
                 <CartItem key={cartProd.id} cartProd={cartProd} />
                </>
            })}
        </div>
    )
}
export default CartList;