export const LOGIN = "LOGIN";

export interface Action {
  type: string;
  payload: string;
}

export interface AuthState {
  auth: {
    userName: string;
  };
}
