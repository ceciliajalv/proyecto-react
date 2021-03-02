import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    console.log(product);
    const addCart = (item) => {
        debugger
        console.log(item);
        const isInCart = (id) => {
            console.log('id', id)
            return product.findIndex((prod) => prod.item.id === id);
        };
        // const isInCarrito = (id) => {
        //     console.log('id', id)
        //     return product.some(prod => prod.item.id === id)  
        // } 

        let estaCarrito = isInCart(item.item.id);
        if (estaCarrito === -1) {
            setProduct([...product, item]);
            console.log('La cantidad de items id:', item.item.id, ' en el carrito es de ', item.cantidad)
        } 
        else {
            let NuevoItem= {...product[estaCarrito], cantidad:  product[estaCarrito].cantidad + item.cantidad}
            let listaNueva = product.filter(prod => item.item.id !== prod.item.id)
            setProduct([...listaNueva, NuevoItem])
            console.log('La cantidad de items total id:', item.item.id, ' en el carrito es de ', NuevoItem.cantidad)
            }
            
    };
    const qCart = () => {
        const qtyPerProduct = product.map(p => p.cantidad);
        
        return qtyPerProduct.reduce((acc, qty) => acc += qty, 0);
    }
    const pTotal = () => {
        const mapPrice = product.map(p => (p.price*p.cantidad));
        return mapPrice.reduce((acc, prc) => acc += prc, 0);
    }
    console.log('qCart', qCart)
  return (
    <CartContext.Provider
      value={{
        product,
        addCart,
        qCart,
        pTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
