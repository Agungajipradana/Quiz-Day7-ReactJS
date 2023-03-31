import { call, put } from "redux-saga/effects";
import CustomerApi from "../../api/CustomerApi";
import {
  GetCustomerSuccess,
  GetCustomerFailed,
  AddCustomerFailed,
  AddCustomerSuccess,
  FindCustomerSuccess,
  FindCustomerFailed,
  EditCustomerSuccess,
  EditCustomerFailed,
  DelCustomerSuccess,
  DelCustomerFailed,
} from "../Action/CustomerAction";

function* handleCustomer() {
  try {
    const result = yield call(CustomerApi.list);
    yield put(GetCustomerSuccess(result));
  } catch (error) {
    yield put(GetCustomerFailed(error));
  }
}
function* createCustomer(action) {
  const { payload } = action;
  try {
    const result = yield call(CustomerApi.create, payload);
    yield put(AddCustomerSuccess(result.data));
  } catch (error) {
    yield put(AddCustomerFailed(error));
  }
}
function* findCustomer(action) {
  const { payload } = action;
  try {
    const result = yield call(CustomerApi.findOne, payload);
    yield put(FindCustomerSuccess(result));
  } catch (error) {
    yield put(FindCustomerFailed(error));
  }
}
function* editCustomer(action) {
  const { payload } = action;
  try {
    const result = yield call(CustomerApi.update, payload);
    yield put(EditCustomerSuccess(result.data));
  } catch (error) {
    yield put(EditCustomerFailed(error));
  }
}

function* delCustomer(action) {
  const { payload } = action;
  try {
    const result = yield call(CustomerApi.deleted, payload);
    yield put(DelCustomerSuccess(result.data));
  } catch (error) {
    yield put(DelCustomerFailed(error));
  }
}

export { handleCustomer, createCustomer, findCustomer, editCustomer, delCustomer };
