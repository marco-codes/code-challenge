/**
 * Fake dictionary of allowed words.
 * In real life we would want these to come from an
 * api or text file.
 */
export const FAKE_WORD_DICTIONARY = [
  "meows",
  "barks",
  "which",
  "there",
  "their",
  "about",
  "would",
  "these",
  "other",
  "words",
  "could",
  "write",
  "first",
  "water",
  "after",
  "where",
  "right",
  "think",
  "three",
  "years",
  "place",
  "sound",
  "truth",
];

// Choose a random correct word from the fake dictionary
export const CORRECT_WORD =
  FAKE_WORD_DICTIONARY[Math.floor(Math.random() * FAKE_WORD_DICTIONARY.length)];
