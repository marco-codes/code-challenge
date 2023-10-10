import { WORDLE_WORD_LENGTH } from "../../../constants/wordleWordLength";
import { formatWordleWord } from "../formatWordleWord";

describe("formatCorrectWordleWord tests", () => {
  it("Correctly formats given word", () => {
    expect(formatWordleWord("MaRcO")).toEqual(["m", "a", "r", "c", "o"]);
    expect(formatWordleWord("truth")).toEqual(["t", "r", "u", "t", "h"]);
    expect(formatWordleWord("CAPSS")).toEqual(["c", "a", "p", "s", "s"]);
    expect(formatWordleWord("CAP$$")).toEqual(["c", "a", "p", "$", "$"]);
  });

  it("Throws for invalid words", () => {
    expect(() => formatWordleWord("marcos")).toThrow(
      `Expected a ${WORDLE_WORD_LENGTH} letter word but received 6 letter(s).`
    );
  });
});
