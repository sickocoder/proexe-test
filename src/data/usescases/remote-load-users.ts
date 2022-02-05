/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */

import { UnexpectedError } from '../../domain/erros';
import { UserModel } from '../../domain/models';
import { LoadUsersList } from '../../domain/usecases';
import { HttpClient, HttpStatusCode } from '../protocols/http';

export class RemoteLoadUsersList implements LoadUsersList {
  constructor(private readonly url: string, private readonly httpClient: HttpClient<any>) {} // TODO: add proper type

  async loadAll(): Promise<UserModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'GET',
    });

    const remoteUsers = httpResponse.body || [];

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteUsers;
      case HttpStatusCode.notFound:
        return [];
      default:
        throw new UnexpectedError();
    }
  }
}
