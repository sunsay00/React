import * as types from '../consts/actionTypes'

export default function performerReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_PERFORMERS_SUCCESS:
            return action.performers;
        case types.CREATE_PERFORMER_SUCCESS:
            return [...state, Object.assign({}, action.performer)];
        case types.UPDATE_PERFORMER_SUCCESS:
            return [
                ...state.filter(performer => performer.id !== action.performer.id),
                Object.assign({}, action.performer)
            ];
        default:
            return state;
    }
}