import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById("root")
  );