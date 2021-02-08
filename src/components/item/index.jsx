
const Item = ({product}) => {
    return <div className="card">
        <h5>{product.name}</h5>
        <p>$ {product.price}</p>
        <p>Stock: {product.stock}</p>
    </div>
}
export default Item;