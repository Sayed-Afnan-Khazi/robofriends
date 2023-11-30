import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App'
import 'tachyons';

import { createLogger } from 'redux-logger';

import { Provider } from 'react-redux'; // Connect allows react components to be state aware, usually used for "smart" components
import { createStore, applyMiddleware, combineReducers } from 'redux'; // Need to combine reducers, since we have two reducers now and need to pass a root reducer to createStore()

import thunkMiddleware from 'redux-thunk';

import { searchRobots, requestRobots } from './reducers';

const rootReducer = combineReducers({ searchRobots, requestRobots })

const logger = createLogger();
const store = createStore(rootReducer, // The root reducer is used here
              applyMiddleware(
              thunkMiddleware,
              logger
              )
              ); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
    {/* The provider takes care of passing the store down to every single element so that we don't have to do so as props */}
      <App/>
    </Provider>
  </React.StrictMode>
);


