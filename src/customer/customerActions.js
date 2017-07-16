import * as types from "./customerConstants";
import customerApi from "./customerApi";

const createCustomer = customer => {
  return { type: types.CREATE_CUSTOMER_SUCCESS, customer };
};

const updateCustomer = customer => {
  return { type: types.UPDATE_CUSTOMER_SUCCESS, customer };
};

export function saveCustomerAsync(customer) {
  let dispatchMethod = createCustomer;
  if (customer.id) {
    dispatchMethod = updateCustomer;
  }
  return function(dispatch) {
    return customerApi
      .saveCustomer(customer)
      .then(response => {
        dispatch(dispatchMethod(response));
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

export function getCustomerAsync(id) {
  return function(dispatch) {
    return customerApi.getCustomerDetail(id);
  };
}
