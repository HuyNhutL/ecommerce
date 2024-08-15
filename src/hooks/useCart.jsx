import { useState, useEffect } from 'react';

function useCart() {
    const [cart, setCart] = useState(() => {
        // Initialize the cart from localStorage, or as an empty array
        const storedCart = localStorage.getItem('shoppingCart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Use useEffect to update localStorage whenever the cart changes
    useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }, [cart]);

    // Add an item to the cart
    const addItem = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
    };

    // Remove an item from the cart by index
    const removeItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    // Clear the cart
    const clearCart = () => {
        setCart([]);
    };

    return {
        cart,
        addItem,
        removeItem,
        clearCart,
    };
}

export default useCart;
