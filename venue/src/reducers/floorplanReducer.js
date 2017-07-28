import * as types from '../consts/actionTypes'

export default function floorplanReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_FLOORPLANS_SUCCESS:
            return action.floorplans;
        case types.CREATE_FLOORPLAN_SUCCESS:
            return [...state, Object.assign({}, action.floorplan)];
        case types.UPDATE_FLOORPLAN_SUCCESS:
            return [
                ...state.filter(floorplan => floorplan.id !== action.floorplan.id),
                Object.assign({}, action.floorplan)
            ];
        default:
            return state;
    }
}