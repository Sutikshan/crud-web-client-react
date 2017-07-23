import * as types from "./customerConstants";
import * as notificationTypes from "../util/loadingStatus/loadingStatusConstants";

import customerApi from "./customerApi";
import { beginLoadingStatus } from "../util/loadingStatus/loadingStatusAction";

const createCustomer = customer => {
  return { type: types.CREATE_CUSTOMER_SUCCESS, customer };
};

const updateCustomer = customer => {
  return { type: types.UPDATE_CUSTOMER_SUCCESS, customer };
};

const ajaxCallError = error => {
  return { type: notificationTypes.AJAX_CALL_ERROR, error };
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
      .catch(err => {
        dispatch(ajaxCallError(err));
        throw err;
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
      .catch(err => {
        dispatch(ajaxCallError(err));
        throw err;
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
