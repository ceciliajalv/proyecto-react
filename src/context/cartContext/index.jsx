import React, { createContext, useState } from 'react'

export const CartContext = createContext()


export const CartProvider = ({children}) =>{
    const [product, setProduct] = useState ([])
    console.log(product);

    const isInCart = (id) => {
        return product.findIndex(prod => prod.id === id)
    }

    const addCart = (item) => {
        console.log(item);

        let estaCarrito = isInCart(item.item.id)
        console.log(estaCarrito);
        if (estaCarrito === -1){
        setProduct([...product, item])
        }else{
        let NuevoItem= {...product[estaCarrito], quantity:  product[estaCarrito].quantity + item.quantity}
        let listaNueva = product.filter(prod => item.item.id !== prod.item.id)
        setProduct([...listaNueva, NuevoItem])
        }
    }

    return (
        <CartContext.Provider value={{
            product,
            addCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;