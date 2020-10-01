import {combineReducers} from 'redux';
import changeCategoryReducer from './changeCategoryReducer'

const rootReducer = combineReducers({
    changeCategoryReducer:changeCategoryReducer
})
export default rootReducer;