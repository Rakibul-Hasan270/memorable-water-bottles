const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart);
    }
    return [];
}

const setCartToLocalStg = cart => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const addToLocalStg = id => {
    const cart = getStoredCart();
    const addProduct = [...cart, id];
    setCartToLocalStg(addProduct);

    // cart.push(id);
    // setCartToLocalStg(cart)
}

const removeFromLocalStg = id => {
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !== id);
    setCartToLocalStg(remaining);
}

export { addToLocalStg, getStoredCart, removeFromLocalStg }