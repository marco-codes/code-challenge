import { LetterStatus } from "../../constants/lettetStatus";
import { GuessAttemptWithFeedback } from "../../types/wordle/guessAttemptFeedback";
import { WordGuessAttempt } from "../../types/wordle/wordGuessAttempt";
import { throwError } from "../error";
import { formatWordleWord } from "./formatWordleWord";
import { assertGuessAttemptIsValid } from "./assertGuessAttemptIsValid";

/**
 * Gets word feedback for a single guess attempt
 *
 * @param guessAttempt User word guess attempt
 * @param guessWord The word the user is tring to guess
 * @returns GuessAttemptWithFeedback
 */
export function getGuessAttemptFeedback(
  guessAttempt: WordGuessAttempt,
  guessWord: string
): GuessAttemptWithFeedback {
  if (!assertGuessAttemptIsValid(guessAttempt)) {
    throwError("Invalid guess attempt.");
  }

  const formattedCorrectWord = formatWordleWord(guessWord);

  // Status array
  return guessAttempt.map((letter, index) => {
    // Default to "not in word"
    let status = LetterStatus.NotInWord;

    if (formattedCorrectWord[index] === letter) {
      status = LetterStatus.Correct;
    } else if (formattedCorrectWord.includes(letter)) {
      status = LetterStatus.WrongSpot;
    }

    return { letter, status };
  }) as GuessAttemptWithFeedback;
}
