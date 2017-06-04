import * as types from "./customerConstants";

export function createCustomer(customer) {
  return { type: types.CREATE_CUSTOMER, customer };
}
