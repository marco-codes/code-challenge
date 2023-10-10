/**
 * Throw an error with an optional http status code.
 *
 * @param message - The error message.
 */
export function throwError(message: string): never {
  throw Object.assign(new Error(message));
}
