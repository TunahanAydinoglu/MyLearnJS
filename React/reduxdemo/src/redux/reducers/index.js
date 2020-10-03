import {combineReducers} from "redux";
import counterReducer from "./counterReducer"

const reducers = combineReducers({
    // counterReducer:counterReducer //ayni ise yarar
    counterReducer
});

export default reducers;