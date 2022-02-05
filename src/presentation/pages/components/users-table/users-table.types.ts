import { UserModel } from '../../../../domain/models';

export interface UsersTableProps {
  onDataChanged: (newUsers: Array<UserModel>) => void;
}

export type TableUser = {
  id: number;
  name: string;
  username: string;
  city: string;
  email: string;
};

export type SortOrder = 'asc' | 'desc';
