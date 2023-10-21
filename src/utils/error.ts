/**
 * Throw an error with a specified error message
 *
 * @param message - The error message.
 */
export function throwError(message: string): never {
  throw Object.assign(new Error(message));
}
