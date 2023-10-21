import { LetterStatus } from "../../../constants/letterStatus";
import type { GuessAttemptWithFeedback } from "../../../types/wordle/guessAttemptFeedback";
import type { WordGuessAttempt } from "../../../types/wordle/wordGuessAttempt";
import { getGameState } from "../wordleQuestion2";

const CORRECT_GUESS: WordGuessAttempt = ["t", "r", "u", "t", "h"];

const WRONG_GUESS: WordGuessAttempt = ["t", "z", "h", "t", "p"];

const CORRECT_GUESS_WITH_FEEDBACK: GuessAttemptWithFeedback = [
  { letter: "t", status: LetterStatus.Correct },
  { letter: "r", status: LetterStatus.Correct },
  { letter: "u", status: LetterStatus.Correct },
  { letter: "t", status: LetterStatus.Correct },
  { letter: "h", status: LetterStatus.Correct },
];

const WRONG_GUESS_WITH_FEEDBACK: GuessAttemptWithFeedback = [
  { letter: "t", status: LetterStatus.Correct },
  { letter: "z", status: LetterStatus.NotInWord },
  { letter: "h", status: LetterStatus.WrongSpot },
  { letter: "t", status: LetterStatus.Correct },
  { letter: "p", status: LetterStatus.NotInWord },
];

const CORRECT_WORD = "truth";

describe("getGameState tests", () => {
  it("Returns partially completed game state to then completed state", () => {
    expect(
      getGameState({
        gameState: [
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        guessAttempt: WRONG_GUESS,
        guessWord: CORRECT_WORD,
      })
    ).toEqual([
      WRONG_GUESS_WITH_FEEDBACK,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);

    expect(
      getGameState({
        gameState: [
          WRONG_GUESS_WITH_FEEDBACK,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        guessAttempt: WRONG_GUESS,
        guessWord: CORRECT_WORD,
      })
    ).toEqual([
      WRONG_GUESS_WITH_FEEDBACK,
      WRONG_GUESS_WITH_FEEDBACK,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);

    expect(
      getGameState({
        gameState: [
          WRONG_GUESS_WITH_FEEDBACK,
          WRONG_GUESS_WITH_FEEDBACK,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        guessAttempt: WRONG_GUESS,
        guessWord: CORRECT_WORD,
      })
    ).toEqual([
      WRONG_GUESS_WITH_FEEDBACK,
      WRONG_GUESS_WITH_FEEDBACK,
      WRONG_GUESS_WITH_FEEDBACK,
      undefined,
      undefined,
      undefined,
    ]);
  });

  expect(
    getGameState({
      gameState: [
        WRONG_GUESS_WITH_FEEDBACK,
        WRONG_GUESS_WITH_FEEDBACK,
        WRONG_GUESS_WITH_FEEDBACK,
        undefined,
        undefined,
        undefined,
      ],
      guessAttempt: WRONG_GUESS,
      guessWord: CORRECT_WORD,
    })
  ).toEqual([
    WRONG_GUESS_WITH_FEEDBACK,
    WRONG_GUESS_WITH_FEEDBACK,
    WRONG_GUESS_WITH_FEEDBACK,
    WRONG_GUESS_WITH_FEEDBACK,
    undefined,
    undefined,
  ]);

  expect(
    getGameState({
      gameState: [
        WRONG_GUESS_WITH_FEEDBACK,
        WRONG_GUESS_WITH_FEEDBACK,
        WRONG_GUESS_WITH_FEEDBACK,
        WRONG_GUESS_WITH_FEEDBACK,
        undefined,
        undefined,
      ],
      guessAttempt: CORRECT_GUESS,
      guessWord: CORRECT_WORD,
    })
  ).toEqual([
    WRONG_GUESS_WITH_FEEDBACK,
    WRONG_GUESS_WITH_FEEDBACK,
    WRONG_GUESS_WITH_FEEDBACK,
    WRONG_GUESS_WITH_FEEDBACK,
    CORRECT_GUESS_WITH_FEEDBACK,
    undefined,
  ]);

  // Completed at this point
  expect(
    getGameState({
      gameState: [
        WRONG_GUESS_WITH_FEEDBACK,
        WRONG_GUESS_WITH_FEEDBACK,
        WRONG_GUESS_WITH_FEEDBACK,
        WRONG_GUESS_WITH_FEEDBACK,
        CORRECT_GUESS_WITH_FEEDBACK,
        undefined,
      ],
      guessAttempt: WRONG_GUESS,
      guessWord: CORRECT_WORD,
    })
  ).toEqual([
    WRONG_GUESS_WITH_FEEDBACK,
    WRONG_GUESS_WITH_FEEDBACK,
    WRONG_GUESS_WITH_FEEDBACK,
    WRONG_GUESS_WITH_FEEDBACK,
    CORRECT_GUESS_WITH_FEEDBACK,
    undefined,
  ]);
});
