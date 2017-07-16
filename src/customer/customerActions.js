import * as types from "./customerConstants";
import customerApi from "./customerApi";
import { beginLoadingStatus } from "../lib/loadingStatus/loadingStatusAction";

const createCustomer = customer => {
  return { type: types.CREATE_CUSTOMER_SUCCESS, customer };
};

const updateCustomer = customer => {
  return { type: types.UPDATE_CUSTOMER_SUCCESS, customer };
};

export function saveCustomerAsync(customer) {
  return function(dispatch) {
    dispatch(beginLoadingStatus());

    return customerApi
      .saveCustomer(customer)
      .then(response => {
        if (customer.id) {
          dispatch(updateCustomer(response));
        } else {
          dispatch(createCustomer(response));
        }
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
    dispatch(beginLoadingStatus());
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
const getCustomer = customer => {
  return { type: types.GET_CUSTOMER_SUCCESS, customer };
};

export function getCustomerAsync(id) {
  return function(dispatch) {
    dispatch(beginLoadingStatus());
    return customerApi.getCustomerDetail(id).then(customer => {
      dispatch(getCustomer(customer));
    });
  };
}

export function updateName(name) {
  return function(dispatch) {
    dispatch({
      type: types.UPDATE_CUSTOMER_NAME,
      name
    });
  };
}
