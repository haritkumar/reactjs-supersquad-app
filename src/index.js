import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {addCharacterById} from "./actions";
import rootReducer from "./reducers/index";

const myStore = createStore(rootReducer);
console.log(myStore.getState());
myStore.subscribe(() => console.log(myStore.getState()));
myStore.dispatch(addCharacterById(2));

ReactDOM.render(<Provider store={myStore}><App/></Provider>, document.getElementById("root"));