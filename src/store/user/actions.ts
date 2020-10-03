import {
  UserActionTypes,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from './types';

export function signInRequest(): UserActionTypes {
  return {
    type: SIGN_IN_REQUEST,
  };
}

export function signInSuccess(): UserActionTypes {
  return {
    type: SIGN_IN_SUCCESS,
  };
}

export function signInFailure(): UserActionTypes {
  return {
    type: SIGN_IN_FAILURE,
  };
}
