import * as types from '../consts/actionTypes';
import venueApi from '../api/mockVenueApi';

export function createPerformerSuccess(performer) {
    return { type: types.CREATE_PERFORMER_SUCCESS, performer };
}

export function updatePerformerSuccess(performer) {
    return { type: types.UPDATE_PERFORMER_SUCCESS, performer };
}

export function loadPerformerSuccess(performers) {
    return { type: types.LOAD_PERFORMERS_SUCCESS, performers };
}


export function savePerformer(performer) {
  return function (dispatch, getState) {
    return venueApi.savePerformer(performer).then(performer => {
    const found = getState().performers.filter(ev => ev.id == performer.id);
      found && found.length > 0 ? dispatch(updatePerformerSuccess(performer)) :
        dispatch(createPerformerSuccess(performer));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPerformers() {
    return function (dispatch) {
        return venueApi.getPerformers().then(performers => {
            dispatch(loadPerformerSuccess(performers));
        }).catch(error => {
            throw (error);
        });
    };
}