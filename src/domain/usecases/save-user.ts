import { UserModel } from '../models/user';

export interface SaveUser {
  save: (params: SaveUser.Params) => Promise<SaveUser.Params>;
}

export namespace SaveUser {
  export type Params = {
    name: string;
    email: string;
  };

  export type Model = UserModel;
}
