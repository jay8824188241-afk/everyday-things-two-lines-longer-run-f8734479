// Everyday Things, Two Lines, Longer Run
// Writes a two-line explanation of a traffic jam to /output/entry.txt.
// Line 1: one vivid sentence that explains a traffic jam to a 10-year-old
// through a single concrete, surprising analogy.
// Line 2: one sentence saying what the analogy maps and what it leaves out.
// Only Node's standard library is used; the output is fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "A traffic jam is like a hallway full of elephants all trying to squeeze through one dog door at the same time, so everyone shuffles forward one step, stops, and waits.";
const LINE_2 =
  "The elephants show how big, slow cars pile up behind one narrow squeeze, but they leave out that drivers can choose a lane or turn off, while elephants just follow the herd.";

const text = `${LINE_1}\n${LINE_2}\n`;

// The gate only accepts 1 to 400 characters, so refuse to write an
// over-long entry rather than ship one the judge never sees.
if (text.length < 1 || text.length > 400) {
  throw new Error(`entry.txt must be 1-400 characters, got ${text.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
