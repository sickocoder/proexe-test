import { SortOrder, TableUser } from './users-table.types';

export const sort = (order: SortOrder, users: Array<TableUser>) => {
  const sortedUsers = users.sort((first: any, next: any) => first.username - next.name);

  if (order === 'asc') return sortedUsers.reverse();
  return sortedUsers;
};
