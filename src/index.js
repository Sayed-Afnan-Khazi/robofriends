import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App'
import 'tachyons';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { searchRobots } from './reducers';

const store = createStore(searchRobots); // The root reducer is used here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
    {/* The provider takes care of passing the store down to every single element so that we don't have to do so as props */}
      <App/>
    </Provider>
  </React.StrictMode>
);


