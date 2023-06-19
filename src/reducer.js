const reducer = (state, action) => {
  if (action.type === "DISPLAY_ITEM") {
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "DECREASE") {
    const tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: tempCart };
  }

  return state;
};

export default reducer;
