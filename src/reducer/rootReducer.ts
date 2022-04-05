import userInfoReducer, { UserInfoStore } from "./userInfoReducer";
import { combineReducers } from "redux";

export interface ReduxStore {
  userInfo: UserInfoStore;
}

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
