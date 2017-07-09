import { createStore, applyMiddleware } from "redux";
import rootReducer from "../rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

const middleware = process.env.NODE_ENV !== "production"
  ? [reduxImmutableStateInvariant(), thunk]
  : [thunk];

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
