import { combineReducers } from 'redux';

import usersReducer from './users/users.reducer';
import { UsersEnum } from './users/users.types';

export default combineReducers({
  [UsersEnum.Users]: usersReducer,
});
