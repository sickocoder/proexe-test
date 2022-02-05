import { RemoteLoadUsersList } from '../../../data/usescases/remote-load-users';
import { LoadUsersList } from '../../../domain/usecases';
import { makeApiUrl, makeAxiosHttpClient } from '../http';

export const makeRemoteLoadUsersList = (): LoadUsersList =>
  new RemoteLoadUsersList(makeApiUrl('/data'), makeAxiosHttpClient());
