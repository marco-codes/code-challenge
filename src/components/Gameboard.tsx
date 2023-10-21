import { twMerge } from "tailwind-merge";
import { GuessAttemptsWithFeedback } from "../types/wordle/guessAttemptFeedback";
import { WordGuessAttempt } from "../types/wordle/wordGuessAttempt";
import { WordInput } from "./WordInput";

interface GameboardProps {
  guessAttemptsWithFeedback: GuessAttemptsWithFeedback;
  onGuessAttemptChange(guessAttempt: WordGuessAttempt): void;
  className?: string;
}

export const Gameboard = ({
  guessAttemptsWithFeedback,
  className,
  onGuessAttemptChange,
}: GameboardProps) => (
  <ul className={twMerge("flex flex-col items-center gap-6", className)}>
    {guessAttemptsWithFeedback.map(
      (guessAttemptWithFeedback, attemptNumber) => (
        <li key={`attempt-${attemptNumber}`}>
          {guessAttemptWithFeedback ? (
            <WordInput
              id={`attempt-${attemptNumber}`}
              guessAttemptWithFeedback={guessAttemptWithFeedback}
            />
          ) : (
            <WordInput
              id={`attempt-${attemptNumber}`}
              onChange={onGuessAttemptChange}
              disabled={
                attemptNumber !==
                guessAttemptsWithFeedback.findIndex(
                  (guessAttemptWithFeedback) =>
                    guessAttemptWithFeedback === undefined
                )
              }
            />
          )}
        </li>
      )
    )}
  </ul>
);
