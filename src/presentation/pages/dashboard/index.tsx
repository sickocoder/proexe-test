import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UserModel } from '../../../domain/models';
import { getUsersActionFailure, getUsersActionSuccess } from '../../redux/users/users.actions';
import { getUsersError } from '../../redux/users/users.selectors';
import UsersTable from '../components/users-table';
import { DashboardProps } from './dashboard.types';

const Dashboard: FC<DashboardProps> = ({ loadUsersList, hidratateCache, loadUsersListCache }) => {
  const dispatch = useDispatch();
  const storedError = useSelector(getUsersError);

  const hidratateRemoteCache = useCallback(
    async (users: UserModel[] | undefined) => {
      if (users)
        try {
          const cachedUsers = await hidratateCache.hidratate(
            (users || []) as ReadonlyArray<UserModel>
          );

          dispatch(getUsersActionSuccess(cachedUsers));
        } catch (error) {
          dispatch(getUsersActionFailure(error as Error));
        }
    },
    [dispatch, hidratateCache]
  );

  const getCacheData = useCallback(async () => {
    try {
      const data = await loadUsersListCache.loadAll();
      dispatch(getUsersActionSuccess(data));
      return data;
    } catch (error) {
      dispatch(getUsersActionFailure(error as Error));
    }

    return [];
  }, [dispatch, loadUsersListCache]);

  const fetchUsers = useCallback(async () => {
    try {
      const cachedUsers = await getCacheData();

      if (!cachedUsers.length) {
        const users = await loadUsersList.loadAll();
        return users;
      }

      await getCacheData();
      return undefined;
    } catch (error) {
      dispatch(getUsersActionFailure(error as Error));
    }

    return [];
  }, [dispatch, getCacheData, loadUsersList]);

  const handleOnDataChanged = useCallback(
    (users: Array<UserModel>) => {
      dispatch(getUsersActionSuccess(users));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchUsers().then(hidratateRemoteCache);
  }, [fetchUsers, hidratateRemoteCache, loadUsersList]);

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <UsersTable onDataChanged={handleOnDataChanged} />
      <Snackbar open={storedError} autoHideDuration={6000} onClose={() => {}}>
        <Alert severity="error">Something went wrong! Try again!</Alert>
      </Snackbar>
    </div>
  );
};

export default Dashboard;
