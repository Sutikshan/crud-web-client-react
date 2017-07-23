import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

const middleware =
  process.env.NODE_ENV === "production"
    ? thunk
    : compose(
      applyMiddleware(...[reduxImmutableStateInvariant(), thunk]),
      window.devToolsExtension
        ? window.devToolsExtension()
        : devTools => devTools
    );
console.log(middleware, process.env.NODE_ENV);
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, middleware);
}
