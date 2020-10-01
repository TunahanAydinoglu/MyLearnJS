import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      );
      if (addedItem) {
        let newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {quantity: addedItem.quantity + 1});
          }
          return cartItem;
        });
        return newState;
      } else {
        // newState.push(action.payload); //bunun yerine
        return [...state, { ...action.payload }];
      }

      case actionTypes.REMOVE_FROM_CART:
          let newState = state.filter(c=>c.product.id !== action.payload.product.id);
          return newState;
          
    default:
      return state;
  }
}
