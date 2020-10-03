export interface UserState {
  loading: boolean;
}

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

interface SignInRequestAction {
  type: typeof SIGN_IN_REQUEST;
}
interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
}
interface SignInFailureAction {
  type: typeof SIGN_IN_FAILURE;
}

export type UserActionTypes =
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction;
