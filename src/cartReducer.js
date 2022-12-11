const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { itemname, description, image, finalprice } = action.payload;

    let cartProduct;

    cartProduct = {
      itemname,
      description,
      image,
      finalprice,
    };

    console.log(cartProduct);

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }
  return state;
};

export default cartReducer;
