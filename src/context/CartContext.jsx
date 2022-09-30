import React, {createContext, useState} from 'react';
import ItemDetail from '../components/ItemDetailContainer/ItemDetail';

const CartContext = createContext()

const CarritoProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            const newCart = [...cart]
            for (const element of newCart) {
                if(element.producto.id === producto.id) {
                    element.cantidad = element.cantidad + cantidad
                }
            }
            setCart(newCart)
        } else {
            setCart(
                [
                    ...cart,
                    {
                        producto: producto,
                        cantidad: cantidad
                    }
                ]
            )
        }
    }

    const removeToCart = (id) => {
        const newCart = [...cart].filter(element => element.producto.id !== id)
        setCart(newCart)
    }

    const isInCart = (id) => {
        return cart.find((element) => element.producto.id === id)
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotal = () => {
        let total = 0;
        cart.forEach((element) => {
            total += (element.cantidad * element.producto.precio);
        })
        return total;
    }

    const cantProduct = () => {
        let cant = 0
        cart.forEach((element) => {
            cant += (element.cantidad);
        })
        return cant;
    }

    return (
        <>
            <CartContext.Provider value={{cart, addToCart, removeToCart, clearCart, getTotal, cantProduct}}>
                    {props.children}
            </CartContext.Provider>
        </>
    );
}

export {CartContext, CarritoProvider};