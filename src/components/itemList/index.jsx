import Item from "../item/"
import {Link} from 'react-router-dom'
const ItemList = ({products}) => {
    return (
        <div className="listProd">
            {products.map((product)=> {
                return <>
                 <Item key={product.id} product={product} />
                </>
            })}
        </div>
    )
}
export default ItemList;