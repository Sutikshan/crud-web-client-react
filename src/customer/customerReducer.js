import * as types from "./customerConstants";

export default function customerReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_CUSTOMER:
      return [...state, Object.assign({}, action.customer)];

    default:
      return state;
  }
}