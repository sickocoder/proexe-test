import { AnyAction } from 'redux';

import { Reducer, UsersState } from '../redux.types';
import { UsersEnum } from './users.types';

export const getUsersSuccess: Reducer<UsersState, AnyAction> = (state, action) => ({
  ...state,
  [UsersEnum.Loading]: false,
  [UsersEnum.Data]: action.payload,
});

export const getUsersFailure: Reducer<UsersState, AnyAction> = state => ({
  ...state,
  [UsersEnum.Error]: true,
});

export const setLoading: Reducer<UsersState, AnyAction> = state => ({
  ...state,
  [UsersEnum.Loading]: true,
});

export const saveUserSuccess: Reducer<UsersState, AnyAction> = (state, action) => ({
  ...state,
  [UsersEnum.Loading]: false,
  [UsersEnum.Data]: action.payload,
});

export const saveUserFailure: Reducer<UsersState, AnyAction> = state => ({
  ...state,
  [UsersEnum.Error]: true,
});
