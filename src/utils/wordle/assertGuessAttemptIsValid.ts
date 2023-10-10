import { WordGuessAttempt } from "../../types/wordle/wordGuessAttempt";

/**
 * Validates a guess attempt
 *
 * @param guessAttempt
 * @returns True if guess attempt meets single character requirement
 *          for each array element, false otherwise.
 */
export function assertGuessAttemptIsValid(
  guessAttempt: WordGuessAttempt
): boolean {
  return guessAttempt.every((letter) => letter.length === 1);
}
