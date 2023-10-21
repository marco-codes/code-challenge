import { LetterStatus } from "../../../constants/letterStatus";
import {
  GuessAttemptWithFeedback,
  GuessAttemptsWithFeedback,
} from "../../../types/wordle/guessAttemptFeedback";
import { isGameComplete } from "../wordleQuestion3";

/**
 * Ideally these constants would go in testApp utility so they can
 * be reused in other tests, but running low on time.
 */

const CORRECT_GUESS: GuessAttemptWithFeedback = [
  { letter: "t", status: LetterStatus.Correct },
  { letter: "r", status: LetterStatus.Correct },
  { letter: "u", status: LetterStatus.Correct },
  { letter: "t", status: LetterStatus.Correct },
  { letter: "h", status: LetterStatus.Correct },
];

const WRONG_GUESS: GuessAttemptWithFeedback = [
  { letter: "t", status: LetterStatus.Correct },
  { letter: "r", status: LetterStatus.NotInWord },
  { letter: "u", status: LetterStatus.WrongSpot },
  { letter: "t", status: LetterStatus.Correct },
  { letter: "h", status: LetterStatus.NotInWord },
];

describe("wordleQuestion3 tests", () => {
  it("Returns false for an incomplete board", () => {
    const gameState = [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ];
    expect(isGameComplete(gameState)).toEqual(false);
  });

  it("Returns false if user has used up all of the guesses", () => {
    const gameState: GuessAttemptsWithFeedback = [
      WRONG_GUESS,
      WRONG_GUESS,
      WRONG_GUESS,
      WRONG_GUESS,
      WRONG_GUESS,
      WRONG_GUESS,
    ];
    expect(isGameComplete(gameState)).toEqual(false);
  });

  it("Returns true if user guesses the word correctly (ON THE FIRST TRY?!?!)", () => {
    const gameState: GuessAttemptsWithFeedback = [
      CORRECT_GUESS,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ];
    expect(isGameComplete(gameState)).toEqual(true);
  });

  it("Returns true if the user guesses on their last try", () => {
    const gameState: GuessAttemptsWithFeedback = [
      WRONG_GUESS,
      WRONG_GUESS,
      WRONG_GUESS,
      WRONG_GUESS,
      WRONG_GUESS,
      CORRECT_GUESS,
    ];
    expect(isGameComplete(gameState)).toEqual(true);
  });
});
