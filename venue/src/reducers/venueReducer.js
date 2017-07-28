import * as types from '../consts/actionTypes'

export default function venueReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_VENUES_SUCCESS:
            return action.venue;
        case types.CREATE_VENUE_SUCCESS:
            return [...state, Object.assign({}, action.venue)];
        case types.UPDATE_VENUE_SUCCESS:
            return [
                ...state.filter(venue => venue.id !== action.venue.id),
                Object.assign({}, action.venue)
            ];
        default:
            return state;
    }
}