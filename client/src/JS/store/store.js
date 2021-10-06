import { createStore, applyMiddleware, compose } from "redux";
import reducerContact from "../reducers/reducerContact";
import thunk from "redux-thunk"


// const arr =[thunk, midl1, midl2]

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducerContact, 
    // composeEnhansers(applyMiddleware(...arr))
    composeEnhansers(applyMiddleware(thunk))
    );
export default store