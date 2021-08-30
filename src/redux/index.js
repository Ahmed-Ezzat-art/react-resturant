
import { createStore, combineReducers } from "redux";
import { allReducers } from "./reducers";

const root = combineReducers({
    allReducers,
})

export const store = createStore(root,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
