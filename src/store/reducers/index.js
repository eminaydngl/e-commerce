import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";


const reducers = combineReducers({
    client : clientReducer ,
    product : productReducer ,
    shopping : shoppingCartReducer
})

export default reducers;