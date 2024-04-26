import { EVENTS_ERROR, GET_EVENTS, SET_LOADING } from "../actions/types";

const initialState = {
  events: null,
  currentEvent: null,
  loading: false,
  error: null,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case EVENTS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default eventsReducer;
