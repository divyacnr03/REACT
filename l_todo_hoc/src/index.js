import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import ItemsListVinay from './components/ItemsListVinay';
import ItemsListVatsal from './components/ItemsListVatsal';
import ItemsListRonak from './components/ItemsListRonak';
import ItemsListGagan from './components/ItemsListGagan';
import './index.css';
import store from './configureStore'



ReactDOM.render(
    <Provider store={store}>
        <div>
        <div className='center'>
            <App />
            </div>
            <hr />
            <div class="container">
                <div className="first"> <ItemsListVinay /></div>
                <div className="first"> <ItemsListVatsal /></div>
                <div className="first"> <ItemsListRonak /></div>
                <div className="first"><ItemsListGagan /></div>
            </div>
        </div>
    </Provider>,
    document.getElementById('root')
);