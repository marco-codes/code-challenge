import { LetterStatus } from "../../constants/lettetStatus";
/**
 * Represents all 6 guess attempts with feedback
 */
export type GuessAttemptsWithFeedback = [
  // Each of these is a "guess"
  GuessAttemptWithFeedback,
  GuessAttemptWithFeedback,
  GuessAttemptWithFeedback,
  GuessAttemptWithFeedback,
  GuessAttemptWithFeedback,
  GuessAttemptWithFeedback
];

/**
 * Represents a Wordle guess attempt with feedback
 */
export type GuessAttemptWithFeedback =
  | [
      // Each of these represents a letter with a status
      LetterFeedback,
      LetterFeedback,
      LetterFeedback,
      LetterFeedback,
      LetterFeedback
    ]
  | undefined;

/**
 * The feedback of the each
 * indvidual letter of a guess attempt
 */
export type LetterFeedback =
  | {
      letter: string;
      status: LetterStatus;
    }
  | undefined;
