import * as assetsActionTypes from "./assets-action-types";
import {
  FetchAssetsRequest,
  FetchAssetsSuccessPayload,
  FetchAssetsSuccess,
  FetchAssetsFailurePayload,
  FetchAssetsFailure,
} from "../../../types";

export const fetchAssetsRequest = (payload: {
  searchText: string;
  sortBy: string;
  type: string;
}): FetchAssetsRequest => ({
  type: assetsActionTypes.ASSET_FETCH_REQUEST,
  payload,
});

export const fetchAssetsSuccess = (
  payload: FetchAssetsSuccessPayload
): FetchAssetsSuccess => {
  return {
    type: assetsActionTypes.ASSET_FETCH_SUCESS,
    payload,
  };
};

export const fetchAssetsFailure = (
  payload: FetchAssetsFailurePayload
): FetchAssetsFailure => ({
  type: assetsActionTypes.ASSET_FETCH_FAILURE,
  payload,
});
