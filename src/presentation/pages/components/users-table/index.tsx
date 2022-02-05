import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { UserModel } from '../../../../domain/models';
import { getUsersData, getUsersLoading } from '../../../redux/users/users.selectors';
import ActionConfirmationPrompt from '../action-confirmation-prompt';
import CreateUserModal from '../create-user-modal';
import EditUserModal from '../edit-user-modal';
import { sort } from './user-table.helper';
import { SortOrder, TableUser, UsersTableProps } from './users-table.types';

const UsersTable: React.FC<UsersTableProps> = ({ onDataChanged }) => {
  const [newUserModalOpen, setNewUserModalOpen] = React.useState(false);
  const [sortBy, setSortBy] = React.useState<SortOrder>('desc');
  const [deleteUserId, setDeleteUserId] = React.useState<number | undefined>(undefined);
  const [selectedUser, setSelectedUser] = React.useState<UserModel | undefined>(undefined);
  const storedUsers = useSelector(getUsersData);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const loading = useSelector(getUsersLoading);

  const handleOpen = () => setNewUserModalOpen(true);
  const handleClose = () => setNewUserModalOpen(false);

  const tableUsers: Array<TableUser> = (storedUsers || []).map(user => ({
    id: user.id,
    name: user.name,
    username: user.username,
    city: user.address.city,
    email: user.email,
  }));

  const handleSelectUser = useCallback(
    (user: TableUser) => {
      const cachedUser = (storedUsers || []).find(u => u.id === user.id);

      if (cachedUser) setSelectedUser(cachedUser);
    },
    [storedUsers]
  );

  const handleDeleteUser = useCallback(
    (id: number) => {
      const newUsers = (storedUsers || []).filter(user => user.id !== id);
      onDataChanged(newUsers);

      setDeleteUserId(undefined);
    },
    [onDataChanged, storedUsers]
  );

  const getNextID = useCallback(() => {
    const list = storedUsers || [];

    if (!list.length) return 1;
    return list[list.length - 1].id + 1;
  }, [storedUsers]);

  const handleCreateUser = useCallback(
    (user: any) => {
      const localUser = {
        ...user,
        id: getNextID(),
        username: user.name.split(' ')[0],
        address: {
          city: 'Luanda',
        },
      };
      onDataChanged([...(storedUsers || []), localUser]);
      setSelectedUser(undefined);
      handleClose();
    },
    [onDataChanged, storedUsers, getNextID]
  );

  const handleUpdateUser = useCallback(
    (user: any) => {
      const usersList = storedUsers || [];
      const userIndex = usersList.findIndex(u => u.id === user.id);

      if (userIndex >= 0) {
        const newUsers = [
          ...usersList.slice(0, userIndex),
          user,
          ...usersList.slice(userIndex + 1),
        ];

        onDataChanged(newUsers);
        setSelectedUser(undefined);
      }

      handleClose();
    },
    [onDataChanged, storedUsers]
  );

  const handleChangeSortOrder = useCallback(() => {
    if (sortBy === 'asc') setSortBy('desc');
    else setSortBy('asc');
  }, [sortBy]);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading)
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );

  return (
    <>
      <TableContainer component={Paper} style={{ width: '80%' }}>
        <Box p={2} display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="h4" component="h2">
            Dashboard
          </Typography>
          <Button onClick={handleOpen}>Add User</Button>
        </Box>
        {!tableUsers.length ? (
          <h1>NO USERS</h1>
        ) : (
          <>
            <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">
                    Name{' '}
                    <IconButton onClick={handleChangeSortOrder}>
                      {sortBy === 'asc' ? (
                        <ArrowUpwardSharpIcon fontSize="small" />
                      ) : (
                        <ArrowDownwardSharpIcon fontSize="small" />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">Username</TableCell>
                  <TableCell align="center">City</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Edit</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sort(sortBy, tableUsers)
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(user => (
                    <TableRow
                      key={user.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {user.id}
                      </TableCell>
                      <TableCell align="right">{user.name}</TableCell>
                      <TableCell align="right">{user.username}</TableCell>
                      <TableCell align="right">{user.city}</TableCell>
                      <TableCell align="right">{user.email}</TableCell>
                      <TableCell align="right">
                        <Button onClick={() => handleSelectUser(user)}>Edit</Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button type="button" onClick={() => setDeleteUserId(user.id)}>
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={tableUsers.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )}
      </TableContainer>
      <CreateUserModal onCancel={handleClose} onCreate={handleCreateUser} open={newUserModalOpen} />
      {selectedUser && (
        <EditUserModal
          onCancel={() => setSelectedUser(undefined)}
          onCreate={handleUpdateUser}
          open
          user={selectedUser}
        />
      )}
      {deleteUserId && (
        <ActionConfirmationPrompt
          isOpen
          onCancel={() => setDeleteUserId(undefined)}
          onDelete={handleDeleteUser}
          userId={deleteUserId}
        />
      )}
    </>
  );
};

export default UsersTable;
