import CartItem from "../cartItems/"
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/cartContext/'
import {useContext} from 'react'

const ItemList = ({products}) => {
    return (
        <div className="listProd">
            {products.map((product)=> {
                return <>
                 <CartItem key={product.id} product={product} />
                </>
            })}
        </div>
    )
}
export default ItemList;