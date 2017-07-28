import * as types from '../consts/actionTypes'
import venueApi from '../api/mockVenueApi'

export function loadFloorplanSuccess(floorplans) {
    return { type: types.LOAD_FLOORPLANS_SUCCESS, floorplans };
}


export function createFloorplanSuccess(floorplan) {
    return { type: types.CREATE_FLOORPLAN_SUCCESS, floorplan };
}

export function updateFloorplanSuccess(floorplan) {
    return { type: types.UPDATE_FLOORPLAN_SUCCESS, floorplan };
}

export function loadFloorplans(){
    return function(dispatch){
        return venueApi.getFloorplans().then(floorplans =>{
            dispatch(loadFloorplanSuccess(floorplans));
        }).catch(error =>{
            throw(error);
        });
    };
}


export function saveFloorplan(floorplan) {
  return function (dispatch, getState) {
    return venueApi.saveFloorplan(floorplan).then(floorplan => {
    const foundFloorplan = getState().floorplans.filter(ev => ev.id == floorplan.id);
      foundFloorplan && foundFloorplan.length > 0 ? dispatch(updateFloorplanSuccess(floorplan)) :
        dispatch(createFloorplanSuccess(floorplan));
    }).catch(error => {
      throw(error);
    });
  };
}