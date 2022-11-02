import * as assetsActionTypes from "../actions/assets-action/assets-action-types";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { getAssets } from "../../services";
import {
  fetchAssetsFailure,
  fetchAssetsSuccess,
} from "../actions/assets-action/assets-action";

function* fetchAssetsSaga(action: any): any {
  const { searchText, sortBy, type } = action.payload;
  console.log(searchText, sortBy, type);
  try {
    const response = yield call(getAssets, searchText, sortBy, type);

    yield put(
      fetchAssetsSuccess({
        assets: response,
      })
    );
  } catch (e) {
    yield put(
      fetchAssetsFailure({ error: (e as Error)?.message ?? "Unknown Error!" })
    );
  }
}

function* assetsSaga() {
  yield all([
    takeLatest(assetsActionTypes.ASSET_FETCH_REQUEST, fetchAssetsSaga),
  ]);
}

export default assetsSaga;
