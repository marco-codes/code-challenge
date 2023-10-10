import type {
  GuessAttemptWithFeedback,
  GuessAttemptsWithFeedback,
} from "../../types/wordle/guessAttemptFeedback";
import type { WordGuessAttempt } from "../../types/wordle/wordGuessAttempt";
import { throwError } from "../error";
import { getGuessAttemptFeedback } from "./getGuessAttemptFeedback";
import { isGameComplete } from "./wordleQuestion3";

/**
 * Note to reviewer: I am passing the game state and correct word as a
 * params because I kinda need them.
 */

interface Params {
  guessAttempt: WordGuessAttempt;
  gameState: GuessAttemptsWithFeedback;
  guessWord: string;
}
/**
 *
 * @param board The current state of the game board
 * @param guessAttempt Guess attempt
 * @param guessWord The word the user is trying to guess
 */
export function getGameState({ guessAttempt, gameState, guessWord }: Params) {
  if (isGameComplete(gameState)) {
    return gameState;
  }

  const guessAttemptWithFeedback = getGuessAttemptFeedback(
    guessAttempt,
    guessWord
  );

  return addGuessToGameState(guessAttemptWithFeedback, gameState);
}

function addGuessToGameState(
  guessAttemptWithFeedback: GuessAttemptWithFeedback,
  gameState: GuessAttemptsWithFeedback
): GuessAttemptsWithFeedback {
  const nextGuessIndex = gameState.findIndex(
    (stateItem) => stateItem === undefined
  );

  if (nextGuessIndex < 0) {
    throwError("Unable to add new guess attempt");
  }

  // Not the cleanest, but this will do for now.
  return gameState.map((stateItem, index) =>
    nextGuessIndex === index ? guessAttemptWithFeedback : stateItem
  ) as GuessAttemptsWithFeedback;
}
