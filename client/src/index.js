import React from 'react';
import {applyMiddleware,compose} from 'redux';
import { legacy_createStore as createStore } from "redux";
import * as ReactDOMClient from "react-dom/client";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import App from './App';
import './index.css';

const store = createStore(reducers,compose(applyMiddleware(thunk)))

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
