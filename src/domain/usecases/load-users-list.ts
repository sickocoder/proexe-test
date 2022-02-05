import { UserModel } from '../models/user';

export interface LoadUsersList {
  loadAll: () => Promise<LoadUsersList.Model[]>;
}

export namespace LoadUsersList {
  export type Model = UserModel;
}
