import {
  EVENT_TYPES_ERROR,
  GET_EVENT_TYPES,
  SET_LOADING,
} from "../actions/types";

const initialState = {
  eventTypes: null,
  currentEventType: null,
  loading: false,
  error: null,
};

const eventTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENT_TYPES:
      return {
        ...state,
        eventTypes: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case EVENT_TYPES_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default eventTypesReducer;
