import { UserModel } from '../models/user';

export interface HidratateUsersList {
  hidratate: (params: HidratateUsersList.Params) => Promise<HidratateUsersList.Model[]>;
}

export namespace HidratateUsersList {
  export type Params = ReadonlyArray<UserModel>;
  export type Model = UserModel;
}
