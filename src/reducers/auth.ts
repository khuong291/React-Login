import { LOGIN, AuthState, Action } from "../actions/types";

const defaultState = {
  auth: {
    userName: ""
  }
};

export default function(state: AuthState = defaultState, action: Action) {
  console.log(action);
  switch (action.type) {
    case LOGIN:
      return {
        userName: action.payload
      };

    default:
      return state;
  }
}
