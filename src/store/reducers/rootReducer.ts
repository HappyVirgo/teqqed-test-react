import { combineReducers } from "redux";
import assetsReducer from "./assetsReducer/assetsReducer";

const rootReducer = combineReducers({
  assets: assetsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
