// Entry for "The One-Line Exit"
// (make.fun competition u-kreutzx-the-one-line-exit-1dc652d1)
//
// Writes a single-line resignation letter to /output/entry.txt.
// Deterministic, Node stdlib only, no network, no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER =
  "I hereby resign, effective immediately: I have accepted a position as my cat's full-time staff, with better hours and no meetings.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
