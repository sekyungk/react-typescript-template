import produce from 'immer';

import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  UserActionTypes,
  UserState,
} from './types';

const initialState: UserState = {
  loading: false,
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes,
): UserState =>
  produce(state, (draft) => {
    switch (action.type) {
      case SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }
      case SIGN_IN_SUCCESS: {
        draft.loading = false;
        break;
      }
      case SIGN_IN_FAILURE: {
        draft.loading = false;
        break;
      }
      default: {
        break;
      }
    }
  });
