import { GET_LOCATIONS, LOCATIONS_ERROR, SET_LOADING } from "../actions/types";

const initialState = {
  locations: null,
  currentLocation: null,
  loading: false,
  error: null,
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOCATIONS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default locationsReducer;
