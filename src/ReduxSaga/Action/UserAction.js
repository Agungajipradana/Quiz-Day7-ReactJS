import * as ActionUser from "../Constant/UserConstant";

export const doSignupRequest = (payload) => ({
  type: ActionUser.SIGNUP_REQUEST,
  payload,
});

export const doSignupSuccess = (payload) => ({
  type: ActionUser.SIGNUP_SUCCESS,
  payload,
});

export const doSigninRequest = (payload) => ({
  type: ActionUser.SIGNIN_REQUEST,
  payload,
});

export const doSigninSuccess = (payload) => ({
  type: ActionUser.SIGNIN_SUCCESS,
  payload,
});

export const doSignoutRequest = (payload) => ({
  type: ActionUser.SIGNOUT_REQUEST,
  payload,
});

export const doSignoutSuccess = (payload) => ({
  type: ActionUser.SIGNOUT_SUCCESS,
  payload,
});

export const doMessageNotif = (payload) => ({
  type: ActionUser.MESSAGE_NOTIFICATION,
  payload,
});
