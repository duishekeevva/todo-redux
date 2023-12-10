import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import{todoReducer} from "./todoReducer/todoReducer"
import thunk from "redux-thunk";
import {userReducer} from "./todoReducer/userReducer";

 export const store = createStore(combineReducers({
    user: userReducer,
    todo: todoReducer,
}),composeWithDevTools(applyMiddleware(thunk)))