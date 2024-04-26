import { combineReducers } from "@reduxjs/toolkit";
import eventsReducer from "./eventsReducer";
import locationsReducer from "./locationsReducer";
import usersReducer from "./usersReducer";
import eventTypesReducer from "./eventTypesReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  events: eventsReducer,
  locations: locationsReducer,
  users: usersReducer,
  eventTypes: eventTypesReducer,
  login: loginReducer,
});
