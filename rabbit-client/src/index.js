import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import habitReducer from './reducers/habitReducer'
import App from './App';
// import reportWebVitals from './reportWebVitals';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; 

let store = createStore(habitReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

// reportWebVitals();