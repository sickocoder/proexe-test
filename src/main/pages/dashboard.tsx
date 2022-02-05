import React from 'react';

import Dashboard from '../../presentation/pages/dashboard';
import { makeRemoteLoadUsersList } from '../factories/usecases';
import { makeCacheHidratateUsersList } from '../factories/usecases/cache-hidratate-users-list-factory';
import { makeCacheLoadUsersList } from '../factories/usecases/cache-load-users-list-factory';

export const makeDashboardPage = () => (
  <Dashboard
    loadUsersList={makeRemoteLoadUsersList()}
    hidratateCache={makeCacheHidratateUsersList()}
    loadUsersListCache={makeCacheLoadUsersList()}
  />
);
