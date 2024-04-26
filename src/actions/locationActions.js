import { GET_LOCATIONS, LOCATIONS_ERROR, SET_LOADING } from "./types";

export const getLocations = () => async (dispatch) => {
  try {
    setLoading();
    const response = await fetch("http://localhost:8000/locations");
    const data = await response.json();

    dispatch({
      type: GET_LOCATIONS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOCATIONS_ERROR,
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
