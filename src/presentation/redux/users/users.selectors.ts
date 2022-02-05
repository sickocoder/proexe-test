import memoize from 'fast-memoize';

import { State } from '../redux.types';
import { UsersEnum } from './users.types';

// eslint-disable-next-line import/prefer-default-export
export const getUsersData = memoize((state: State) => state[UsersEnum.Users][UsersEnum.Data]);
export const getUsersLoading = memoize((state: State) => state[UsersEnum.Users][UsersEnum.Loading]);
export const getUsersError = memoize((state: State) => state[UsersEnum.Users][UsersEnum.Error]);
