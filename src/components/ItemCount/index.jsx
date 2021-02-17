export const ItemCount = ({stock, onAdd, onSub, onBuy, contador, btnCompra}) => {
    return (
    <>
        <div>
            <button onClick={onSub} disabled={contador == 1}>-</button>
            <b>{contador}</b>
            <button  onClick={onAdd} disabled={contador == stock || contador > stock}>+</button>
            <p>Stock:{stock}</p>
        </div>
        <div>
            <button onClick={onBuy} disabled={stock == 0}>{btnCompra}</button>
        </div>

        
    </>
    )
}