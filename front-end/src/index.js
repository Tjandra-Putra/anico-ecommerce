import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

import "./index.css";
import App from "./App";

// Takes reducer as an input
const store = createStore(reducer);

// Subscription
store.subscribe(() => {
    console.log("[Subscription]", store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// ========================== Hamburger Menu Animation ==========================
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");

// On click
hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
});
