import * as types from '../consts/actionTypes';
import venueApi from '../api/mockVenueApi';

export function createVenueSuccess(venue) {
    return { type: types.CREATE_VENUE_SUCCESS, venue };
}

export function updateVenueSuccess(venue) {
    return { type: types.UPDATE_VENUE_SUCCESS, venue };
}

export function loadVenueSuccess(venue) {
    return { type: types.LOAD_VENUES_SUCCESS, venue };
}


export function saveVenue(venue) {
  return function (dispatch, getState) {
    return venueApi.saveVenue(venue).then(venue => {
    const found = getState().venues.filter(ev => ev.id == venue.id);
      found && found.length > 0 ? dispatch(updateVenueSuccess(venue)) :
        dispatch(createVenueSuccess(venue));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadVenue() {
    return function (dispatch) {
        return venueApi.getVenue().then(venue => {
            dispatch(loadVenueSuccess(venue));
        }).catch(error => {
            throw (error);
        });
    };
}
