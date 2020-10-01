import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function categoryListReducer(state=initialState.categories,action){
   var newState = state;
switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
        newState = action.payload;
        return newState;

    default:
        return newState;
}
}