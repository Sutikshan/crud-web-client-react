import * as types from "./customerConstants";
import initialState from "../initialState";

export default function customerReducer(state = initialState.customer, action) {
  switch (action.type) {
    case types.GET_CUSTOMER_SUCCESS:
      return action.customer;

    case types.CREATE_CUSTOMER_SUCCESS:
    case types.UPDATE_CUSTOMER_SUCCESS:
      return action.customer;

    default:
      return state;
  }
}
