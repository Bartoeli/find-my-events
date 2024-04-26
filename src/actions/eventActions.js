import { EVENTS_ERROR, GET_EVENTS, SET_LOADING } from "./types";

export const getEvents = () => async (dispatch) => {
  try {
    setLoading();
    const response = await fetch("http://localhost:8000/events");
    const data = await response.json();

    dispatch({
      type: GET_EVENTS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EVENTS_ERROR,
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
