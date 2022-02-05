/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */

import { UnexpectedError } from '../../domain/erros';
import { UserModel } from '../../domain/models';
import { SaveUser } from '../../domain/usecases';
import { SetStorage } from '../protocols/cache';

export class CacheSaveUsersList implements SaveUser {
  constructor(private readonly cacheRepo: SetStorage) {}

  async save(userData: SaveUser.Params): Promise<SaveUser.Params> {
    try {
      this.cacheRepo.set('data', userData);
      return userData;
    } catch (error) {
      throw new UnexpectedError();
    }
  }
}
