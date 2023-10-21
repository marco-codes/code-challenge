import {
  type ChangeEvent,
  type KeyboardEvent,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { LetterInput } from "./LetterInput";
import { WordGuessAttempt } from "../types/wordle/wordGuessAttempt";
import { GuessAttemptWithFeedback } from "../types/wordle/guessAttemptFeedback";

interface WordInputProps {
  /**
   * Unique input identifier
   */
  id: string;
  guessAttemptWithFeedback?: GuessAttemptWithFeedback;
  disabled?: boolean;
  onChange?(guessAttempt: WordGuessAttempt): void;
}

const DEFAULT_LETTER_VALUE = "";

export const WordInput = ({
  id,
  guessAttemptWithFeedback,
  disabled,
  onChange,
}: WordInputProps) => {
  const [guessAttempt, setGuessAttempt] = useState<WordGuessAttempt>([
    DEFAULT_LETTER_VALUE,
    DEFAULT_LETTER_VALUE,
    DEFAULT_LETTER_VALUE,
    DEFAULT_LETTER_VALUE,
    DEFAULT_LETTER_VALUE,
  ]);

  // Refs for each individualt input
  const letterOneRef = useRef<HTMLInputElement | null>(null);
  const letterTwoRef = useRef<HTMLInputElement | null>(null);
  const letterThreeRef = useRef<HTMLInputElement | null>(null);
  const letterFourRef = useRef<HTMLInputElement | null>(null);
  const letterFiveRef = useRef<HTMLInputElement | null>(null);

  const letters = useMemo(
    () => [
      letterOneRef,
      letterTwoRef,
      letterThreeRef,
      letterFourRef,
      letterFiveRef,
    ],
    []
  );

  const letterDetails = letters.map((ref, letterPosition) => ({
    id: `${id}-${letterPosition}`,
    ref,
    letterPosition,
  }));

  const onLetterChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const newLetter = target.value;
      const tabIndex = target.tabIndex;

      if (tabIndex === undefined || newLetter === " ") {
        return;
      }

      if (newLetter && tabIndex !== letters.length - 1) {
        const nextInput = letters[tabIndex + 1].current;
        if (!nextInput?.value) {
          // Only focus next input if its value is falsy
          letters[tabIndex + 1].current?.focus();
        }
      }

      const newGuessAttempt = guessAttempt.map((existingLetter, index) =>
        index === tabIndex ? newLetter : existingLetter
      ) as WordGuessAttempt;

      setGuessAttempt(newGuessAttempt);
      onChange?.(newGuessAttempt);
    },
    [guessAttempt, onChange, letters]
  );

  const onKeyDown = (
    { code }: KeyboardEvent<HTMLInputElement>,
    letterPosition: number
  ) => {
    if (
      code === "Backspace" &&
      letterPosition !== 0 &&
      !guessAttempt[letterPosition]
    ) {
      letters[letterPosition - 1].current?.focus();
    }
  };

  return (
    <ul className="flex flex-row gap-4">
      {guessAttemptWithFeedback &&
        guessAttemptWithFeedback.map((letterWithFeedback, letterPosition) => (
          <li key={`${id}-${letterPosition}`}>
            <LetterInput
              value={letterWithFeedback?.letter}
              status={letterWithFeedback?.status}
              disabled
            />
          </li>
        ))}
      {!guessAttemptWithFeedback &&
        letterDetails.map(({ id, ref, letterPosition }) => (
          <li key={id}>
            <LetterInput
              value={guessAttempt[letterPosition]}
              tabIndex={letterPosition}
              ref={ref}
              onChange={onLetterChange}
              onKeyDown={(e) => onKeyDown(e, letterPosition)}
              disabled={disabled}
            />
          </li>
        ))}
    </ul>
  );
};
