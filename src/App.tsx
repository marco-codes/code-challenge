import { useCallback, useState } from "react";
import type { GuessAttemptsWithFeedback } from "./types/wordle/guessAttemptFeedback";
import { WordGuessAttempt } from "./types/wordle/wordGuessAttempt";
import { Gameboard } from "./components/Gameboard";
import { getGameState } from "./utils/wordle/wordleQuestion2";
import { assertGuessAttemptIsValid } from "./utils/wordle/assertGuessAttemptIsValid";
import { CORRECT_WORD } from "./constants/fakeDictionary";

function App() {
  const [currentGuessAttempt, setCurrentGuessAttempt] =
    useState<WordGuessAttempt>();
  const [boardState, setBoardState] = useState<GuessAttemptsWithFeedback>([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  const onCurrentGuessChange = (guessAttempt: WordGuessAttempt) => {
    setCurrentGuessAttempt(guessAttempt);
  };

  const onGuessClick = useCallback(() => {
    if (currentGuessAttempt) {
      const newBoardState = getGameState({
        guessAttempt: currentGuessAttempt,
        gameState: boardState,
        guessWord: CORRECT_WORD,
      });
      setBoardState(newBoardState);
    }
    setCurrentGuessAttempt(undefined);
  }, [currentGuessAttempt, boardState]);

  return (
    <div className="mx-auto max-w-xl h-screen px-6 py-8 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center uppercase font-roboto-slab tracking-widest">
        Wordle
      </h1>
      <Gameboard
        className="pt-12"
        guessAttemptsWithFeedback={boardState}
        onGuessAttemptChange={onCurrentGuessChange}
      />
      <button
        disabled={
          !(
            currentGuessAttempt &&
            assertGuessAttemptIsValid(currentGuessAttempt)
          )
        }
        onClick={onGuessClick}
        className="block font-bold text-2xl w-40 h-12 text-center rounded-3xl bg-sky-600 mt-10"
      >
        Guess
      </button>
    </div>
  );
}

export default App;
