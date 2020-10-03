import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { userReducer, watchSignInAsync } from './user';

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default function* rootSaga() {
  yield all([watchSignInAsync()]);
}
