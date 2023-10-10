import { WordGuessAttempt } from "./wordGuessAttempt";

/**
 * Question #1: Data Structure 2
 * Record<string, GuessAttempt>
 * e.g.
 * {
 *  attemptOne:   ["G", "R", "A", "F", "T"],
 *  attemptTwo:   ["T", "R", "U", "S", "T"],
 *  attemptThree: ["G", "R", "U", "N", "T"],
 *  attemptFour:  ["T", "O", "U", "R", "S"],
 *  attemptFive:  ["G", "R", "A", "S", "S"],
 *  attemptSix:   ["N", "O", "T", "E", "S"],
 * ]
 */
export interface WordleAttempts {
  attemptOne: WordGuessAttempt[];
  attemptTwo: WordGuessAttempt[];
  attemptThree: WordGuessAttempt[];
  attemptFour: WordGuessAttempt[];
  attemptFive: WordGuessAttempt[];
  attemptSix: WordGuessAttempt[];
}
