import * as ActionType from "../Constant/CustomerConstant";

const INIT_STATE = {
  customers: [],
  customer: [],
};

const CustomerReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.GET_CUSTOMER_SUCCESS:
      return GetCustomerSuccessfully(state, action);
    case ActionType.ADD_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.ADD_CUSTOMER_SUCCESS:
      return AddCustomerSuccessfully(state, action);
    case ActionType.FIND_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.FIND_CUSTOMER_SUCCESS:
      return FindCustomerSuccessfully(state, action);
    case ActionType.EDIT_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.EDIT_CUSTOMER_SUCCESS:
      return EditCustomerSuccessfully(state, action);
    case ActionType.DEL_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.DEL_CUSTOMER_SUCCESS:
      return DelCustomerSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetCustomerSuccessfully = (state, action) => {
  return {
    ...state,
    customer: action.payload,
  };
};

const AddCustomerSuccessfully = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    customer: [...state.customer, payload],
  };
};

const FindCustomerSuccessfully = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    customer: payload,
  };
};

const EditCustomerSuccessfully = (state, action) => {
  return {
    ...state,
  };
};

const DelCustomerSuccessfully = (state, action) => {
  return {
    ...state,
  };
};

export default CustomerReduce;
