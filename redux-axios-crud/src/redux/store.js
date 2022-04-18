import rootReducer from "./reducer";
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = createStore(rootReducer, composeWithDevTools());

export default Store;