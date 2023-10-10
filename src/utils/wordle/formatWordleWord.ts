import { WORDLE_WORD_LENGTH } from "../../constants/wordleWordLength";
import { throwError } from "../error";

/**
 * Formats a wordle word
 *
 * @param word word string to format
 * @returns Formatted word
 */
export function formatWordleWord(word: string): string[] {
  const formattedWord = word.trim().toLocaleLowerCase().split("");
  const formattedWordLetterCount = formattedWord.length;

  if (formattedWordLetterCount !== WORDLE_WORD_LENGTH) {
    throwError(
      `Expected a ${WORDLE_WORD_LENGTH} letter word but received ${formattedWordLetterCount} letter(s).`
    );
  }
  return formattedWord;
}
