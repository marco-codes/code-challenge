import { WordGuessAttempt } from "./wordGuessAttempt";

/**
 * Question #1: Data Structure 1
 * Multi-dimensional array of WordTry[]
 * e.g.
 * [
 *  ["G", "R", "A", "F", "T"]
 *  ["T", "R", "U", "S", "T"]
 *  ["G", "R", "U", "N", "T"]
 *  ["T", "O", "U", "R", "S"]
 *  ["G", "R", "A", "S", "S"]
 *  ["N", "O", "T", "E", "S"]
 * ]
 */
export type WordleAttempts = [
  WordGuessAttempt[],
  WordGuessAttempt[],
  WordGuessAttempt[],
  WordGuessAttempt[],
  WordGuessAttempt[],
  WordGuessAttempt[]
];
