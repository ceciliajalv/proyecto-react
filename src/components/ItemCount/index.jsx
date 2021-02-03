export const ItemCount = ({stock, onAdd, onSub, onBuy, contador, btnCompra}) => {
    return (
    <>
        <div>
            <button onClick={onSub}>-</button>
            <b>{contador}</b>
            <button onClick={onAdd}>+</button>
        </div>
        <div>
            <button onClick={onBuy}>{btnCompra}</button>
        </div>

        
    </>
    )
}