import { CacheLoadUsersList } from '../../../data/usescases/cache-load-users';
import { LoadUsersList } from '../../../domain/usecases';
import { makeLocalStorageAdapter } from '../cache';

export const makeCacheLoadUsersList = (): LoadUsersList =>
  new CacheLoadUsersList(makeLocalStorageAdapter());
