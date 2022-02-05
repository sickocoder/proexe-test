/* eslint-disable no-redeclare */
export interface DeleteUser {
  save: (params: DeleteUser.Params) => Promise<void>;
}

export namespace DeleteUser {
  export type Params = {
    id: string;
  };
}
