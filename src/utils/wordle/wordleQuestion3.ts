import { LetterStatus } from "../../constants/lettetStatus";
import type { GuessAttemptWithFeedback } from "../../types/wordle/guessAttemptFeedback";

/**
 * Determines whether the game is complete or not
 *
 * @param board game state
 * @returns True if game is complete, false otherwise
 */
export function isGameComplete(
  guessAttempts: GuessAttemptWithFeedback[]
): boolean {
  return (
    guessAttempts.some((attempt) => hasGuessedTheWordCorrectly(attempt)) ??
    guessAttempts.every((attempt) => hasUsedUpAllGuesses(attempt))
  );
}

/**
 * Determines if the user has guessed the word correctly
 *
 * @param guessAttemptWithFeedback Guess attempt with feedback
 * @returns True if word has been guessed correctly, false otherwise
 */
export function hasGuessedTheWordCorrectly(
  guessAttemptWithFeedback: GuessAttemptWithFeedback
): boolean {
  if (!guessAttemptWithFeedback) {
    return false;
  }
  return guessAttemptWithFeedback.every(
    (attempt) => attempt?.status === LetterStatus.Correct
  );
}

export function hasUsedUpAllGuesses(
  guessAttemptWithFeedback: GuessAttemptWithFeedback
): boolean {
  if (!guessAttemptWithFeedback) {
    return false;
  }
  return guessAttemptWithFeedback.every((guess) => !!guess);
}
