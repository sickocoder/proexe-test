import { createReducer } from '@reduxjs/toolkit';

import { UsersState } from '../redux.types';
import UserActionTypes from './users.enum';
import {
  getUsersFailure,
  getUsersSuccess,
  saveUserFailure,
  saveUserSuccess,
  setLoading,
} from './users.reducers-helper';
import { UsersEnum } from './users.types';

export const INITIAL_STATE = {
  [UsersEnum.Loading]: false,
  [UsersEnum.Data]: null,
  [UsersEnum.Error]: false,
};

const exampleReducer = createReducer<UsersState>(INITIAL_STATE, {
  [UserActionTypes.GET_USERS_START]: setLoading,
  [UserActionTypes.GET_USERS_SUCCESS]: getUsersSuccess,
  [UserActionTypes.GET_USERS_FAILURE]: getUsersFailure,

  [UserActionTypes.SAVE_USER_START]: setLoading,
  [UserActionTypes.SAVE_USER_SUCCESS]: saveUserSuccess,
  [UserActionTypes.SAVE_USER_FAILURE]: saveUserFailure,
});

export default exampleReducer;
