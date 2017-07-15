import { combineReducers } from "redux";
import customers from "./customer/customersReducer";

const rootReducer = combineReducers({
  customers
});

export default rootReducer;
