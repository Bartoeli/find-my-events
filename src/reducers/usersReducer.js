import { GET_USERS, SET_CURRENT, USERS_ERROR } from "../actions/types";

const initialState = {
  users: null,
  currentUser: null,
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        currentUser: action.payload,
      };
    case USERS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
