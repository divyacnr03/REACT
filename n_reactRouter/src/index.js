import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import App2 from './components/App_page2';
import App3 from './components/App_page3';
import App4 from './components/App_page4';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import './index.css';

const sampleProps = "something"


ReactDOM.render(
        <div className='center'>
                    <Router>
            <div >
                <Switch>
                    <Route path='/app2/app3' component={(props) => <App4 sampleProps={sampleProps}/>} />
                    <Route path='/app2' component={App2} /> 
                    <Route path='/app3' component={App3} /> 
                    <Route path='/app4' component={App4} /> 
                    <Route path='/' component={App} /> 

                    

                </Switch>
            </div>
        </Router>

        </div>,
    document.getElementById('root')
);