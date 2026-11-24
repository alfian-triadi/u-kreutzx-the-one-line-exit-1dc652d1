// Entry for "The One-Line Exit"
// (make.fun competition u-kreutzx-the-one-line-exit-1dc652d1)
//
// Writes a single-line resignation letter to /output/entry.txt.
// Deterministic, Node stdlib only, no network, no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER =
  "I hereby resign, effective immediately: I have accepted a position as my cat's full-time staff, with better hours and no meetings.";

mkdirSync("/output", { recursive: true });
// Gate the brief's own limits before writing: one line, 1-140 chars.
// Failing loudly here beats shipping a letter the judge would reject.
if (LETTER.length < 1 || LETTER.length > 140 || LETTER.includes("\n")) {
  throw new Error(`letter must be one line of 1-140 chars, got ${LETTER.length}`);
}
writeFileSync("/output/entry.txt", LETTER, "utf8");
