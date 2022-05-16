import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    );

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleDelete = (product) => {
        const newCart = cart.findIndex(p => p.id === product.id);
        cart.splice(newCart, 1);
        setCart([...cart]);
    };

    return (
        <CartContext.Provider value={{ cart, setCart, handleDelete }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);