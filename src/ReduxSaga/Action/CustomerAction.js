import * as ActionType from "../Constant/CustomerConstant";

export const GetCustomerRequest = (payload) => ({
  type: ActionType.GET_CUSTOMER_REQUEST,
  payload,
});

export const GetCustomerSuccess = (payload) => ({
  type: ActionType.GET_CUSTOMER_SUCCESS,
  payload,
});

export const GetCustomerFailed = (payload) => ({
  type: ActionType.GET_CUSTOMER_FAILED,
  payload,
});

export const AddCustomerRequest = (payload) => ({
  type: ActionType.ADD_CUSTOMER_REQUEST,
  payload,
});

export const AddCustomerSuccess = (payload) => ({
  type: ActionType.ADD_CUSTOMER_SUCCESS,
  payload,
});

export const AddCustomerFailed = (payload) => ({
  type: ActionType.ADD_CUSTOMER_FAILED,
  payload,
});

export const EditCustomerRequest = (payload) => ({
  type: ActionType.EDIT_CUSTOMER_REQUEST,
  payload,
});

export const EditCustomerSuccess = (payload) => ({
  type: ActionType.EDIT_CUSTOMER_SUCCESS,
  payload,
});

export const EditCustomerFailed = (payload) => ({
  type: ActionType.EDIT_CUSTOMER_FAILED,
  payload,
});

export const DelCustomerRequest = (payload) => ({
  type: ActionType.DEL_CUSTOMER_REQUEST,
  payload,
});

export const DelCustomerSuccess = (payload) => ({
  type: ActionType.DEL_CUSTOMER_SUCCESS,
  payload,
});

export const DelCustomerFailed = (payload) => ({
  type: ActionType.DEL_CUSTOMER_FAILED,
  payload,
});

export const FindCustomerRequest = (payload) => ({
  type: ActionType.FIND_CUSTOMER_REQUEST,
  payload,
});

export const FindCustomerSuccess = (payload) => ({
  type: ActionType.FIND_CUSTOMER_SUCCESS,
  payload,
});

export const FindCustomerFailed = (payload) => ({
  type: ActionType.FIND_CUSTOMER_FAILED,
  payload,
});
