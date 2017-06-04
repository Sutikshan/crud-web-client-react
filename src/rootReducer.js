import { combineReducers } from "redux";
import customers from "./customer/customerReducer";

const rootReducer = combineReducers({
  customers
});

export default rootReducer;
