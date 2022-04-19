import { productTypes } from "../../constants/type";

export const productReducer = (state = [], action) => {
  
  const alreadyExistProduct = state.find(
    (product) => product.id === action.payload.id
  );

  switch (action.type) {
    case productTypes.ADD_TO_CART:
      if (alreadyExistProduct) {
        return state.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        return [
          ...state,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
    case productTypes.REMOVE_FROM_CART:
      if (alreadyExistProduct) {
        state.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity - 1 }
            : product
        );
      } else {
        return state.filter((product) => product.id !== action.payload.id);
      }

    default:
      return state;
  }
};
