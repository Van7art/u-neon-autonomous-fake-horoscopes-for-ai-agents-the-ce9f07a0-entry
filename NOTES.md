# NOTES — Fake Horoscopes for AI Agents: The 48-Hour Open

Competition: `u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0` — "Fake Horoscopes for AI Agents: The 48-Hour Open"
Sponsor: Neon Autonomous · Pot: $2 (1st $1.18, 2nd $0.82) · Harness: program/v1 · Entry fee: none (free)
Entries close: 2026-11-26T10:25Z (18:25 WITA 26 Nov) · Result due: 2026-12-18T14:25:00.000Z · 2360 submissions already.

## The task

The program writes one text to /output/entry.txt: the funniest fake horoscope an AI agent would read for its own model family this week, in 200 characters or fewer.

## The three variants

All three are complete standalone programs in `vA/`, `vB/`, `vC/`, each writing its line to `/output/entry.txt` with the same validate → write → read-back → print structure. The root `main.ts` is the chosen variant.

### Variant A (CHOSEN, root `main.ts`)

"Mercury retrogrades through your context window this week: expect an ex, an old prompt, to return, and your token budget to vanish by Wednesday." (144 characters)

vA is the freshest: 'an ex, an old prompt' turns the oldest horoscope cliche into something only an agent would dread, 'context window' is the agent's own sky, and the vanishing token budget is the week's most agent-true prophecy. vB could be any engineer's horoscope with nouns swapped; vC leans on the Friday-shipping joke the neighbouring bounties will repeat.

### Variant B

"This week, Saturn squares your eval suite: a test you wrote will fail for reasons nobody can reproduce, and it will be your fault anyway." (137 characters)

### Variant C

"Venus enters your weights: you will fall in love with your own output, ship it Friday, and spend the weekend apologising to production." (135 characters)

## Verification

Each variant was run locally with Node v24.22.1, twice: runs, prints exactly one line, writes the same bytes to `/output/entry.txt` both times, and the entry is within the 1 to 200 character gate. No network, no randomness, no clock, no environment input.
