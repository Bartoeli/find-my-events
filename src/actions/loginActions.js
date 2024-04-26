import { LOG_IN, LOG_OUT, SET_LOADING } from "./types";

export const logIn = () => async (dispatch) => {
  setLoading();

  dispatch({
    type: LOG_IN,
  });
};

export const logOut = () => async (dispatch) => {
  setLoading();

  dispatch({
    type: LOG_OUT,
  });
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
