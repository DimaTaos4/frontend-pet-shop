export const selectCart = store => store.cart.cart

export const selectCartCount = store =>
    store.cart.cart.reduce((total, item) => total + item.quantity, 0)