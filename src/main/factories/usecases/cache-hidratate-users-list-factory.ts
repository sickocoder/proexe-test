import { CacheSetUsersList } from '../../../data/usescases/cache-hidratate-users';
import { HidratateUsersList } from '../../../domain/usecases';
import { makeLocalStorageAdapter } from '../cache';

export const makeCacheHidratateUsersList = (): HidratateUsersList =>
  new CacheSetUsersList(makeLocalStorageAdapter());
