import * as types from "./customerConstants";

export default function customersReducer(state = [], action) {
  switch (action.type) {
  case types.CREATE_CUSTOMER_SUCCESS:
    return [...state, Object.assign({}, action.customer)];

  case types.LOAD_CUSTOMERS_SUCCESS:
    return action.customers;

  case types.UPDATE_CUSTOMER_SUCCESS:
    return [
      ...state.filter(customer => customer.id !== action.customer.id),
      Object.assign({}, action.customer)
    ];
  default:
    return state;
  }
}
