import * as types from '../consts/actionTypes'

export default function eventReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_EVENT_SUCCESS:
            const result = [...state, Object.assign({}, action.event)];
            return result;
        case types.UPDATE_EVENT_SUCCESS:
            const event = state.find(e => e.id == action.ticket.event_id);
            const e = { ...event, tickets: [...event.tickets, action.ticket] };
            return [
                ...state.filter(event => event.id !== action.ticket.event_id),
                e,
            ];
        case types.CREATE_TICKET_SUCCESS:
            debugger;
            const event1 = state.find(e => e.id == action.ticket.event_id);
            const e1 = { ...event1, tickets: [...event1.tickets, action.ticket] };
            return [
                ...state.filter(event => event.id !== action.ticket.event_id),
                e1,
            ];
        case types.UPDATE_TICKET_SUCCESS:
            break;
        case types.LOAD_EVENTS_SUCCESS:
            return action.events;
        default:
            return state;
    }
}