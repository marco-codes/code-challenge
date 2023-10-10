import { assertGuessAttemptIsValid } from "../assertGuessAttemptIsValid";

describe("assertGuessAttemptIsValid tests", () => {
  it("Successfully validates guess attempts", () => {
    expect(assertGuessAttemptIsValid(["m", "a", "r", "c", "o"])).toEqual(true);
    expect(assertGuessAttemptIsValid(["m", "o", "o", "o", "oooo"])).toEqual(
      false
    );
    expect(assertGuessAttemptIsValid(["meee", "o", "o", "o", "w"])).toEqual(
      false
    );
    expect(assertGuessAttemptIsValid(["", "", "", "", ""])).toEqual(false);
    expect(assertGuessAttemptIsValid(["", "", "", "foo", ""])).toEqual(false);
  });
});
