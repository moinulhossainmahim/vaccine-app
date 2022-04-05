export enum UserInfoActions {
  Set = "SET_USER_INFO",
}

export interface UserInfoStore {
  name: string;
  age: number;
  gender: string;
  pregnancy: string;
}

export interface UserInfoAction {
  type: UserInfoActions;
  payload: UserInfoStore;
}

const initialState: UserInfoStore = {
  name: "",
  age: 0,
  gender: "",
  pregnancy: "",
};

export default function userInfoReducer(
  state = initialState,
  action: UserInfoAction
) {
  switch (action.type) {
    case UserInfoActions.Set:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
