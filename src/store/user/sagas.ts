import { delay, put, takeLatest } from 'redux-saga/effects';

import { SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from './types';

function* signInAsync() {
  try {
    yield delay(3000);
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
