import { combineReducers } from "redux";
import customers from "./customer/customersReducer";
import customer from "./customer/customerReducer";
import numAjaxCallsInProgress from "./lib/loadingStatus/loadingStatusReducer";

const rootReducer = combineReducers({
  customers,
  customer,
  numAjaxCallsInProgress
});

export default rootReducer;
