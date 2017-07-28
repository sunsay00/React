import * as types from '../consts/actionTypes';
import venueApi from '../api/mockVenueApi';

export function createUserSuccess(user) {
    return { type: types.CREATE_USER_SUCCESS, user };
}

export function updateUserSuccess(user) {
    return { type: types.UPDATE_USER_SUCCESS, user };
}

export function loadUserSuccess(user) {
    return { type: types.LOAD_USERS_SUCCESS, user };
}

export function login(user){
    return function (dispatch, getState) {
    return venueApi.login(user).then(user => {
        if(user.id != "")
            dispatch(loadUserSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveUser(user) {
  return function (dispatch, getState) {
    return venueApi.saveUser(user).then(user => {
    const found = getState().performers.filter(ev => ev.id == user.id);
      found && found.length > 0 ? dispatch(updateUserSuccess(user)) :
        dispatch(createUserSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
}
