import { call, put, takeLatest } from 'redux-saga/effects';

import { SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from './types';
import * as api from '../../apis';

function getSignIn() {
  return api.getSignInAPI();
}

function* signInAsync() {
  try {
    yield call(getSignIn);
    yield put({
      type: SIGN_IN_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_IN_FAILURE,
    });
  }
}

export function* watchSignInAsync() {
  yield takeLatest(SIGN_IN_REQUEST, signInAsync);
}
