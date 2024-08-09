import useCookie from './useCookie';

function useCart() {
    const [cart, setCart] = useCookie('shoppingCart');

    // Parse the cart from cookie or initialize it as an empty array
    const parsedCart = cart ? JSON.parse(cart) : [];

    // Add an item to the cart
    const addItem = (item) => {
        const updatedCart = [...parsedCart, item];
        setCart(JSON.stringify(updatedCart));
    };

    // Remove an item from the cart by index
    const removeItem = (index) => {
        const updatedCart = parsedCart.filter((_, i) => i !== index);
        setCart(JSON.stringify(updatedCart));
    };

    // Clear the cart
    const clearCart = () => {
        setCart(JSON.stringify([]));
    };

    return {
        cart: parsedCart,
        addItem,
        removeItem,
        clearCart,
    };
}

export default useCart;
