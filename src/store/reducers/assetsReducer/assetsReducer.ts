import * as assetsActionTypes from "../../actions/assets-action/assets-action-types";

const initialState: any = {
  pending: false,
  assets: [],
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case assetsActionTypes.ASSET_FETCH_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case assetsActionTypes.ASSET_FETCH_SUCESS:
      return {
        ...state,
        pending: false,
        assets: action.payload.assets,
        error: null,
      };
    case assetsActionTypes.ASSET_FETCH_FAILURE:
      return {
        ...state,
        pending: false,
        assets: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
