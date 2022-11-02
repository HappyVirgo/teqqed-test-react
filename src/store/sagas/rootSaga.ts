import { all, fork } from "redux-saga/effects";
import assetsSaga from "./assetsSaga";

export function* rootSaga() {
  yield all([fork(assetsSaga)]);
}
