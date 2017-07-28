import * as types from '../consts/actionTypes';
import venueApi from '../api/mockVenueApi';

export function createEventSuccess(event) {
    return { type: types.CREATE_EVENT_SUCCESS, event };
}

export function updateEventSuccess(event) {
    return { type: types.UPDATE_EVENT_SUCCESS, event };
}

export function loadEventSuccess(events) {
    return { type: types.LOAD_EVENTS_SUCCESS, events };
}

export function createTicketSuccess(ticket){
    return { type: types.CREATE_TICKET_SUCCESS, ticket};
}

export function updateTicketSuccess(ticket){
    return { type: types.UPDATE_TICKET_SUCCESS, ticket};
}

export function saveEvent(event) {
  return function (dispatch, getState) {
    return venueApi.saveEvent(event).then(event => {
    const foundEvent = getState().events.filter(ev => ev.id == event.id);
      foundEvent && foundEvent.length > 0 ? dispatch(updateEventSuccess(event)) :
        dispatch(createEventSuccess(event));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveTicket(ticket) {
  return function (dispatch, getState) {
    return venueApi.saveTicket(ticket).then(ticket => {
    const foundEvent = getState().events.find(ev => ev.id == ticket.event_id);
    const existingIndex = foundEvent.tickets.findIndex(a => a.id == ticket.id);
    if(existingIndex >= 0){
        foundEvent.tickets.splice(existingIndex, 1, ticket);
        dispatch(updateEventSuccess(foundEvent));
    }
    else 
        dispatch(createTicketSuccess(ticket));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadEvents() {
    return function (dispatch) {
        return venueApi.getEvents().then(events => {
            dispatch(loadEventSuccess(events));
        }).catch(error => {
            throw (error);
        });
    };
}
