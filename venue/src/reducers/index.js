import {combineReducers} from 'redux';
import events from './eventReducer';
import floorplans from './floorplanReducer';
import venue from './venueReducer';
import user from './userReducer';
import performers from './performerReducer';
const rootReducer = combineReducers({
    events,
    floorplans,
    venue,
    user,
    performers
});

export default rootReducer;