/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */

import { UnexpectedError } from '../../domain/erros';
import { UserModel } from '../../domain/models';
import { HidratateUsersList } from '../../domain/usecases';
import { SetStorage } from '../protocols/cache';

export class CacheSetUsersList implements HidratateUsersList {
  constructor(private readonly cacheRepo: SetStorage) {}

  async hidratate(params: HidratateUsersList.Params): Promise<UserModel[]> {
    try {
      this.cacheRepo.set('data', params);

      return params as UserModel[];
    } catch (error) {
      throw new UnexpectedError();
    }
  }
}
