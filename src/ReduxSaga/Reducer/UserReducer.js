import * as ActionType from "../Constant/UserConstant";

const getFromStorage = (key) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return sessionStorage.getItem(key);
};

const INIT_STATE = {
  userProfile: getFromStorage("profile") ? JSON.parse(sessionStorage.getItem("profile")) : null,
  userSignup: {},
  message: "",
};

const UserReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.SIGNIN_REQUEST:
      return state;
    case ActionType.SIGNIN_SUCCESS:
      return SigninSuccess(state, action);
    case ActionType.SIGNUP_REQUEST:
      return state;
    case ActionType.SIGNUP_SUCCESS:
      return SignupSuccess(state, action);
    case ActionType.SIGNOUT_REQUEST:
      return state;
    case ActionType.SIGNOUT_SUCCESS:
      return SignoutSuccess(state, action);
    case ActionType.MESSAGE_NOTIFICATION:
      return ShowMessage(state, action);
    default:
      return state;
  }
};

const SigninSuccess = (state, action) => {
  return {
    ...state,
    userProfile: action.payload,
    message: "",
  };
};

const SignupSuccess = (state, action) => {
  return {
    ...state,
    userSignup: action.payload,
  };
};

const SignoutSuccess = (state, action) => {
  return {
    ...state,
    userProfile: {},
    message: "",
  };
};

const ShowMessage = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    message: payload.message,
  };
};

export default UserReducer;
