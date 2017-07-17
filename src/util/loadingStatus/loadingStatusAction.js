import * as types from "./loadingStatusConstants";

export function beginLoadingStatus() {
  return { type: types.BEGIN_LOADING_STATUS };
}
