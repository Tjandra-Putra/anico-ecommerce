import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/es/integration/react";
import "./index.css";
import App from "./App";

const persistConfig = {
  key: "persis-key",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

// Takes reducer as an input
const store = createStore(persistedReducer);

// name has to be persistor
const persistor = persistStore(store);

// Subscription
// store.subscribe(() => {
//   console.log("[Subscription]", store.getState());
// });

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
