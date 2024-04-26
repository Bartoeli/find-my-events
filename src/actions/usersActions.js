import { GET_USERS, SET_CURRENT, SET_LOADING, USERS_ERROR } from "./types";

export const getUsers = () => async (dispatch) => {
  try {
    setLoading();
    const response = await fetch("http://localhost:8000/users");
    const data = await response.json();

    dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error.response.data,
    });
  }
};

export const setCurrentUser = (user) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: user,
  });
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
