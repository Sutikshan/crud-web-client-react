import * as types from "./customerConstants";
import initialState from "../initialState";

export default function customersReducer(
  state = initialState.customer,
  action
) {
  switch (action.type) {
    case types.GET_CUSTOMER_SUCCESS:
      return action.customer;
    case types.UPDATE_CUSTOMER_NAME:
      return Object.assign({}, state, { name: action.name });
    default:
      return state;
  }
}
