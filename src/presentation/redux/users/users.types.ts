import { UserModel } from '../../../domain/models';
import UserActionTypes from './users.enum';

export enum UsersEnum {
  Error = 'error',
  Loading = 'loading',
  Data = 'data',
  Users = 'users',
}

/* Action Interfaces */
export interface GetUsersStartReturn {
  type: typeof UserActionTypes.GET_USERS_START;
  payload: Array<UserModel>;
}

export interface IGetUsersStartReturn {
  (payload: Array<UserModel>): GetUsersStartReturn;
}

export interface GetUsersSuccessReturn {
  type: typeof UserActionTypes.GET_USERS_SUCCESS;
  payload: Array<UserModel>;
}

export interface IGetUsersSuccessReturn {
  (payload: Array<UserModel>): GetUsersSuccessReturn;
}

export interface GetUsersFailureReturn {
  type: typeof UserActionTypes.GET_USERS_FAILURE;
  payload: Error;
}

export interface IGetUsersFailureReturn {
  (payload: Error): GetUsersFailureReturn;
}

// save a user
export interface SaveUserStartReturn {
  type: typeof UserActionTypes.SAVE_USER_START;
  payload: Array<UserModel>;
}

export interface ISaveUserStartReturn {
  (payload: Array<UserModel>): SaveUserStartReturn;
}

export interface SaveUserSuccessReturn {
  type: typeof UserActionTypes.SAVE_USER_SUCCESS;
  payload: Array<UserModel>;
}

export interface ISaveUserSuccessReturn {
  (payload: Array<UserModel>): SaveUserSuccessReturn;
}

export interface SaveUserFailureReturn {
  type: typeof UserActionTypes.SAVE_USER_FAILURE;
  payload: Error;
}

export interface ISaveUserFailureReturn {
  (payload: Error): SaveUserFailureReturn;
}

export type GetUsersActions =
  | GetUsersStartReturn
  | GetUsersSuccessReturn
  | GetUsersFailureReturn
  | SaveUserStartReturn
  | SaveUserSuccessReturn
  | SaveUserFailureReturn;
