export class UnexpectedError extends Error {
  constructor() {
    super('An error as occurred! Please try again!');
    this.name = 'UnexpectedError';
  }
}
