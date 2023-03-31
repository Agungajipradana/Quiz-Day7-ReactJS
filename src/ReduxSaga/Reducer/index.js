import { combineReducers } from "redux";
import CustomerReduce from "./CustomerReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  customerState: CustomerReduce,
  userState: UserReducer,
});

export default rootReducer;
