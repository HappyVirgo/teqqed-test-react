import { Asset } from "./asset.type";

export type Action = {
  payload: any;
};

export type FetchAssetsFailurePayload = {
  error: string;
};
export type FetchAssetsFailure = {
  type: string;
  payload: FetchAssetsFailurePayload;
};
export type FetchAssetsRequest = {
  type: string;
  payload: any;
};
export type FetchAssetsSuccessPayload = {
  assets: Asset[];
};
export type FetchAssetsSuccess = {
  type: string;
  payload: FetchAssetsSuccessPayload;
};
