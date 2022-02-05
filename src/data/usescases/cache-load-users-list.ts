/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */

import { UnexpectedError } from '../../domain/erros';
import { UserModel } from '../../domain/models';
import { CacheLoadUsersList } from '../../domain/usecases';
import { GetStorage } from '../protocols/cache';

export class CacheGetUsersList implements CacheLoadUsersList {
  constructor(private readonly cacheRepo: GetStorage) {}

  async loadUsers(): Promise<UserModel[]> {
    try {
      const users = this.cacheRepo.get('data');
      const usersJson = JSON.parse(users);
      return usersJson as UserModel[];
    } catch (error) {
      throw new UnexpectedError();
    }
  }
}
