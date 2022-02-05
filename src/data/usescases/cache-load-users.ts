/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */

import { UnexpectedError } from '../../domain/erros';
import { UserModel } from '../../domain/models';
import { LoadUsersList } from '../../domain/usecases';
import { GetStorage } from '../protocols/cache';

export class CacheLoadUsersList implements LoadUsersList {
  constructor(private readonly cacheRepo: GetStorage) {}

  async loadAll(): Promise<UserModel[]> {
    try {
      return this.cacheRepo.get('data');
    } catch (error) {
      throw new UnexpectedError();
    }
  }
}
