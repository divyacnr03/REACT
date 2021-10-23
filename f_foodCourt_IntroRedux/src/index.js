import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Employees from './Employees';
import store from './store/configureStore'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store ={store}>
    <Employees />
  </Provider>,
  document.getElementById('root')
);

