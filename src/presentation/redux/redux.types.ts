import { UserModel } from '../../domain/models';
import { UsersEnum } from './users/users.types';

export interface UsersState {
  [UsersEnum.Loading]: boolean;
  [UsersEnum.Error]: boolean;
  [UsersEnum.Data]: Array<UserModel> | null;
}

export interface State {
  [UsersEnum.Users]: UsersState;
}

export type Reducer<S, A> = (state: S, action: A) => S;
