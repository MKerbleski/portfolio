import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import reducer from  './redux/reducer';
import './index.css';
import App from './App';


const store = createStore( reducer,
    //  applyMiddleware(thunk)
    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
     applyMiddleware(thunk, 
    //   logger
      )
  );

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
