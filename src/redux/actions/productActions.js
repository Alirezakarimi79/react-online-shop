import { productTypes } from "../constants/type"

export const addToCart = (product)=>{
   return {
        type: productTypes.ADD_TO_CART,
        payload: product
    }
};

export const removeFromCart = (product)=>{
    return {
         type: productTypes.REMOVE_FROM_CART,
         payload: product
     }
 }