import { LOGIN } from "../actions/types";

export default function(
  state = { userName: "" },
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case LOGIN:
      return {
        userName: action.payload
      };

    default:
      return state;
  }
}
