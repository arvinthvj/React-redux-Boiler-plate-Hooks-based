import { applyMiddleware, createStore} from "redux";
import { combineReducers } from "redux";
import thunk from 'redux-thunk';

const initialBalance = 1000;


const bankReducer = ( state = initialBalance, action ) => {
    debugger
    switch (action.type) {
        case "add":
            return state + action.payload
        case "get":
            return state - action.payload
        default:
            return state
    }
}



const reducers = combineReducers({
    bank : bankReducer
})



export const store = createStore(reducers, applyMiddleware(thunk))