import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App'
import 'tachyons';

import { createLogger } from 'redux-logger';

import { Provider } from 'react-redux'; // Connect allows react components to be state aware, usually used for "smart" components
import { createStore, applyMiddleware } from 'redux';

import { searchRobots } from './reducers';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger)); // The root reducer is used here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
    {/* The provider takes care of passing the store down to every single element so that we don't have to do so as props */}
      <App/>
    </Provider>
  </React.StrictMode>
);


