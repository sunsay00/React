import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { loadEvents } from './actions/eventActions';
import { loadFloorplans } from './actions/floorplanActions';
import { loadVenue } from './actions/venueActions';
import { loadPerformers } from './actions/performerActions';
import './index.css';

const store = configureStore();
store.dispatch(loadEvents());
store.dispatch(loadFloorplans());
store.dispatch(loadVenue());
store.dispatch(loadPerformers());

ReactDOM.render(
    <Provider store={store}>
        <Router><App /></Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
