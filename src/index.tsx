import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './сomponents/App';
import store from './store';


if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)