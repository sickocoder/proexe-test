import { UserModel } from '../models/user';

export interface UpdateUser {
  save: (params: UpdateUser.Params) => Promise<UpdateUser.Model>;
}

export namespace UpdateUser {
  export type Params = {
    id: string;
    name: string;
    email: string;
  };

  export type Model = UserModel;
}
