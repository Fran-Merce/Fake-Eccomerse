export const addItemToCart = (cartItems, cartItemToAdd) => {
  const produtInCart = cartItems.find(item => item.id === cartItemToAdd.id);
  if (produtInCart) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const totalPrice = cartItems => {
  if (cartItems.length === 0) return 0;
  return cartItems.reduce((acc, item) => (acc += item.price * item.quantity), 0);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const produtInCart = cartItems.find(item => item.id === cartItemToRemove.id);
  if (produtInCart.quantity === 1)
    return cartItems.filter(item => item.id !== cartItemToRemove.id);

  return cartItems.map(item =>
    item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
