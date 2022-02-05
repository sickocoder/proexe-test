import UserActionTypes from './users.enum';
import {
  IGetUsersFailureReturn,
  IGetUsersStartReturn,
  IGetUsersSuccessReturn,
} from './users.types';

export const getUsersActionStart: IGetUsersStartReturn = payload => ({
  type: UserActionTypes.GET_USERS_START,
  payload,
});

export const getUsersActionSuccess: IGetUsersSuccessReturn = payload => ({
  type: UserActionTypes.GET_USERS_SUCCESS,
  payload,
});

export const getUsersActionFailure: IGetUsersFailureReturn = payload => ({
  type: UserActionTypes.GET_USERS_FAILURE,
  payload,
});
