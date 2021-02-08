import Item from "../item/"
const ItemList = ({products}) => {
    return (
        <div className="listProd">
            {products.map((product)=> {
                return <Item key={product.id} product={product} />
            })}
        </div>
    )
}
export default ItemList;