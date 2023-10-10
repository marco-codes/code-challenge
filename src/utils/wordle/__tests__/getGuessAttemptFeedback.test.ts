import { LetterStatus } from "../../../constants/lettetStatus";
import { getGuessAttemptFeedback } from "../getGuessAttemptFeedback";

describe("getGuessAttemptFeedback tests", () => {
  it("Returns all correct feedback for successfully guessed word", () => {
    expect(getGuessAttemptFeedback(["t", "r", "u", "t", "h"], "truth")).toEqual(
      [
        { letter: "t", status: LetterStatus.Correct },
        { letter: "r", status: LetterStatus.Correct },
        { letter: "u", status: LetterStatus.Correct },
        { letter: "t", status: LetterStatus.Correct },
        { letter: "h", status: LetterStatus.Correct },
      ]
    );
  });

  it("Returns all incorrect feedback for incorrectly guessed word", () => {
    expect(getGuessAttemptFeedback(["m", "e", "o", "w", "w"], "truth")).toEqual(
      [
        { letter: "m", status: LetterStatus.NotInWord },
        { letter: "e", status: LetterStatus.NotInWord },
        { letter: "o", status: LetterStatus.NotInWord },
        { letter: "w", status: LetterStatus.NotInWord },
        { letter: "w", status: LetterStatus.NotInWord },
      ]
    );
  });

  it("Returns feedback for mixed statuses", () => {
    expect(getGuessAttemptFeedback(["t", "o", "u", "o", "t"], "truth")).toEqual(
      [
        { letter: "t", status: LetterStatus.Correct },
        { letter: "o", status: LetterStatus.NotInWord },
        { letter: "u", status: LetterStatus.Correct },
        { letter: "o", status: LetterStatus.NotInWord },
        { letter: "t", status: LetterStatus.WrongSpot },
      ]
    );
  });

  it("Returns all in wrong spot", () => {
    expect(getGuessAttemptFeedback(["w", "o", "s", "e", "m"], "meows")).toEqual(
      [
        { letter: "w", status: LetterStatus.WrongSpot },
        { letter: "o", status: LetterStatus.WrongSpot },
        { letter: "s", status: LetterStatus.WrongSpot },
        { letter: "e", status: LetterStatus.WrongSpot },
        { letter: "m", status: LetterStatus.WrongSpot },
      ]
    );
  });
});
