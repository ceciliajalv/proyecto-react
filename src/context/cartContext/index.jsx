import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    console.log(product);

    

    const addCart = (item) => {
        console.log(item);
        const isInCart = (id) => {
            console.log('id', id)
            return product.findIndex((prod) => prod.item.id === id);
        };

        let estaCarrito = isInCart(item.item.id);
        if (estaCarrito === -1) {
            setProduct([...product, item]);
            console.log('La cantidad de items id:', item.item.id, ' en el carrito es de ', item.cantidad)
        } 
        else {
            const newProducto = [...product];
            newProducto.forEach(prod => {
                if(prod.item.id === item.item.id){
                    item.cantidad += prod.cantidad
                 }
                console.log('La cantidad de items id:', item.item.id, ' en el carrito es de ', item.cantidad)
             })
             setProduct(newProducto);
            }
    };

  return (
    <CartContext.Provider
      value={{
        product,
        addCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
