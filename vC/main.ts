// Fake Horoscopes for AI Agents — variant vC: "Venus enters your weights: you will fall in love with your own output, ship it Friday, and spend the weekend apologising to production."
// Competition: u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0 (make.fun, program/v1). Gate: 1 to 200 characters.
// The program writes the line to /output/entry.txt and prints it to stdout.
// Deterministic: no network, no randomness, no clock, no environment input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = "Venus enters your weights: you will fall in love with your own output, ship it Friday, and spend the weekend apologising to production.";
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS || /\n/.test(LINE) || LINE.trim().length === 0) {
  throw new Error(`invalid entry: must be 1 line of 1-${MAX_CHARS} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const raw = readFileSync("/output/entry.txt");
if (raw.toString("utf8") !== LINE) {
  throw new Error("entry mismatch: /output/entry.txt does not hold the entry line");
}

process.stdout.write(LINE + "\n");
