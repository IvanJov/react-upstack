import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));
registerServiceWorker();
