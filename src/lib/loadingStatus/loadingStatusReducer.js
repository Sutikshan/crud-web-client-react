import * as types from "./loadingStatusConstants";
import initialState from "../../initialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function loadingStatusReducer(
  state = initialState.numAjaxCallsInProgress,
  action
) {
  if (action.type === types.BEGIN_LOADING_STATUS) {
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}
