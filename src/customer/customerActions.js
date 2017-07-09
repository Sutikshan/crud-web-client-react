import * as types from "./customerConstants";
import customerApi from "./mockCustomerApi";

export function createCustomer(customer) {
  return { type: types.CREATE_CUSTOMER, customer };
}

export function createCustomerAsync(customer) {
  return function(dispatch) {
    return customerApi
      .saveCustomer(customer)
      .then(customer => {
        dispatch(createCustomer(customer));
      })
      .catch(error => {
        throw error;
      });
  };
}
export function loadCustomersSuccess(customers) {
  return {
    type: types.LOAD_CUSTOMERS_SUCCESS,
    customers
  };
}
export function loadCustomers() {
  return function(dispatch) {
    return customerApi
      .getAllCustomers()
      .then(customers => {
        dispatch(loadCustomersSuccess(customers));
      })
      .catch(error => {
        throw error;
      });
  };
}
