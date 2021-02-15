import {Link} from 'react-router-dom'
const Item = ({product}) => {
    return <div className="card">
        <h5>{product.name}</h5>
        <p>$ {product.price}</p>
        <p>Stock: {product.stock}</p>
        <Link to={`proyecto-react/productos/${product.id}`}><button>Comprar</button></Link>
    </div>
}
export default Item;