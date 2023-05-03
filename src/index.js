import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardsList from './CardsList'
import 'tachyons';
import { robots } from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardsList robots={robots} />
  </React.StrictMode>
);


