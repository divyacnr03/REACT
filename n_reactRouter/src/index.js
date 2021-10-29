import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import App2 from './components/App_page2';
import App3 from './components/App_page3';
import App4 from './components/App_page4';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import './index.css';



ReactDOM.render(
        <div className='center'>
                    <Router>
            <div >
                <h1>Home Page</h1>
                <Switch>
                    <Route path='/' component={App} /> 
                    <Route path='/app2' component={App2} /> 
                    <Route path='/app3' component={App3} /> 
                    <Route path='/app4' component={App4} /> 

                </Switch>
            </div>
        </Router>

        </div>,
    document.getElementById('root')
);