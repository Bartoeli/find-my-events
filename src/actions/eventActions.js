import {
  ADD_EVENT,
  DELETE_EVENT,
  EVENTS_ERROR,
  GET_EVENTS,
  SET_LOADING,
} from "./types";

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

export const addEvent = (event) => async (dispatch) => {
  try {
    setLoading();
    const response = await fetch("http://localhost:8000/events", {
      method: "POST",
      body: JSON.stringify(event),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    dispatch({
      type: ADD_EVENT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EVENTS_ERROR,
      payload: error.response.data,
    });
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`http://localhost:8000/events/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_EVENT,
      payload: id,
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
