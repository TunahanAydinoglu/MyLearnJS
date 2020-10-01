import * as actionTypes from '../actions/actionTypes';
import inititalState from './initialState';

export default function productListReducer(state=inititalState.products,action){
    
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            state= action.payload;
            return state;
    
        default:
            return state;
    }
}