import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

const middleware =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunk)
    : compose(
        applyMiddleware(...[reduxImmutableStateInvariant(), thunk]),
        window.devToolsExtension
          ? window.devToolsExtension()
          : devTools => devTools
      );
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, middleware);
}
