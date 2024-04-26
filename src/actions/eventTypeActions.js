import { EVENT_TYPES_ERROR, GET_EVENT_TYPES, SET_LOADING } from "./types";

export const getEventTypes = () => async (dispatch) => {
  try {
    setLoading();
    const response = await fetch("http://localhost:8000/eventTypes");
    const data = await response.json();

    dispatch({
      type: GET_EVENT_TYPES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EVENT_TYPES_ERROR,
      payload: error.response.data,
    });
  }
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
