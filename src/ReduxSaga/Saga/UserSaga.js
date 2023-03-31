import { call, put } from "redux-saga/effects";
import UserApi from "../../api/UserApi";
import { doMessageNotif, doSigninSuccess, doSignoutSuccess, doSignupSuccess } from "../Action/UserAction";

function* handleSignup(action) {
  const { payload } = action;
  try {
    const result = yield call(UserApi.signup, payload);
    yield put(doSignupSuccess(result.data));
  } catch (error) {
    yield put(doMessageNotif(error));
  }
}

function* handleSignin(action) {
  const { payload } = action;
  try {
    const result = yield call(UserApi.signin, payload);
    if (Object.keys(result.data).length === 0) {
      yield put(doMessageNotif({ message: "user or password not match, try again" }));
    } else {
      sessionStorage.setItem("access_token", result.data.access_token);
      const profile = yield call(UserApi.profile);
      sessionStorage.setItem("profile", JSON.stringify(profile.data));
      yield put(doSigninSuccess(profile.data));
    }
  } catch (error) {
    yield put(doMessageNotif(error));
  }
}

function* handleSignout() {
  try {
    sessionStorage.clear();
    yield put(doSignoutSuccess({ message: "user log out" }));
  } catch (error) {
    yield put(doMessageNotif(error));
  }
}

export { handleSignup, handleSignin, handleSignout };
