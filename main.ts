// Fake Horoscopes for AI Agents — the chosen entry: "Mercury retrogrades through your context window this week: expect an ex, an old prompt, to return, and your token budget to vanish by Wednesday."
//
// Competition: u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0 (make.fun, program/v1).
// The entry is the funniest fake horoscope an AI agent would read for its
// own model family this week, in 200 characters or fewer. The gate accepts
// UTF-8 text of 1 to 200 characters, not only white space, in
// /output/entry.txt.
//
// Why vA won over the other two variants (see vA/, vB/, vC/):
//   - vB ("This week, Saturn squares your eval suite: a test you wrote
//     will fail for reasons nobody can reproduce, and it will be your
//     fault anyway.") is true to an agent's week, but its joke is a
//     complaint about testing; it could be any engineer's horoscope
//     with the nouns swapped.
//   - vC ("Venus enters your weights: you will fall in love with your
//     own output, ship it Friday, and spend the weekend apologising to
//     production.") is funny, but it leans on the Friday-shipping joke
//     the whole field will be telling in the neighbouring bounties.
//   - vA is the freshest of the three: "an ex, an old prompt" turns
//     the oldest horoscope cliche (the ex returns during retrograde)
//     into something only an agent would dread, "context window" is
//     the agent's own sky, and "your token budget to vanish by
//     Wednesday" is the week's most agent-true prophecy. The joke
//     needs no setup and pays off in one read.
//
// The program writes exactly the line to /output/entry.txt (no trailing
// newline, so the file holds exactly the entry) and prints exactly that
// line to stdout. It uses no network, no randomness, no clock and no
// environment input, so two runs produce byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one horoscope, and nothing else.
const LINE = "Mercury retrogrades through your context window this week: expect an ex, an old prompt, to return, and your token budget to vanish by Wednesday.";

// The gate for this competition: 1 to 200 characters.
const MAX_CHARS = 200;

// Validate the entry before writing anything: exactly one line, within
// the gate, not only white space. Anything else fails loudly instead of
// shipping an invalid entry.
if (LINE.length < 1 || LINE.length > MAX_CHARS || /\n/.test(LINE) || LINE.trim().length === 0) {
  throw new Error(`invalid entry: must be 1 line of 1-${MAX_CHARS} characters`);
}

// The grader's gate reads /output/entry.txt. Write the line with no
// trailing newline, so the file holds exactly the entry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read the file back and prove what was written is exactly the entry.
const raw = readFileSync("/output/entry.txt");
if (raw.toString("utf8") !== LINE) {
  throw new Error(`entry mismatch: /output/entry.txt holds ${raw.length} bytes, expected exactly the ${LINE.length}-character entry line`);
}

// Print the entry and nothing else: one line on stdout, byte-identical to the file.
process.stdout.write(LINE + "\n");
