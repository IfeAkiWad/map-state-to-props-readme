import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux' /*(1) makes store available to nested components.
(2) alerts redux app of any changes in state, which will re-render  react app */
import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

ReactDOM.render(
    <Provider store={store}> 
    {/* store is now available to nested components */}
        <App /> 
    </Provider>,
    document.getElementById('root')
);
