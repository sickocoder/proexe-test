import { UserModel } from '../models/user';

export interface CacheLoadUsersList {
  loadUsers: () => Promise<CacheLoadUsersList.Model[]>;
}

export namespace CacheLoadUsersList {
  export type Model = UserModel;
}
