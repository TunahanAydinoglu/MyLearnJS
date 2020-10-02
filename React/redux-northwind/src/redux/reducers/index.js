import {combineReducers} from 'redux';
import categoryListReducer from './categoryListReducer';
import changeCategoryReducer from './changeCategoryReducer'
import productListReducer from './productListReducer'
import cartReducer from './cartReducer'
import saveProductReducer from './saveProductReducer'

const rootReducer = combineReducers({
    changeCategoryReducer:changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,
    saveProductReducer
})
export default rootReducer;