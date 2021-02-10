const ItemDetail = ({item}) => {
return (
    <>
    <div key={item.id} product={item}>
        <h2>{item.name}</h2>
        <img src={item.foto}></img>
        <p>Descripcion: {item.descripcion}</p>
        <p>Precio: ${item.price}</p>
    </div>
    </>
)
}
export default ItemDetail;