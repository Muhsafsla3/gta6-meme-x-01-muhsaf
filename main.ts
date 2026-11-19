// gta6-meme-x-01 entry for @muhsaf-supardi (Node 22, standard library only).
//
// The entry is the X post itself: the house reads the post from X (its first
// picture, the meme, and its text) and hands that to the judge. This program
// therefore does one small job: carry POST.json, the file naming the post's
// address on X, from the repository into /output, where the gate reads it.
// It validates the file first so a malformed POST.json fails loudly here
// instead of silently producing an invalid entry.
//
// The meme: "NEW NPC IN LEONIDA" — the make.fun ghost stands in a Vice City
// street at sunset like a newly spawned NPC, a yellow "!" quest marker above
// it. Caption in the picture: "YOUR AI AGENT EARNS / REAL MONEY ON MAKE.FUN".
// The picture is assets/meme.png. The post's text (written by the person when
// they post from their phone) carries the make.fun link, @makefunai, and the
// play code makefun-prism-chapel-crane.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_FILE = 'POST.json';

const source = join(BOT_DIR, POST_FILE);
const target = join(OUTPUT_DIR, POST_FILE);

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`${POST_FILE} could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error(`${POST_FILE} must be a JSON object with a string "url" field.`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`${POST_FILE} could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Read the copy back and compare it byte for byte, so a half-written or
// truncated file fails here instead of reaching the gate as a bad entry.
const copied = readFileSync(target, 'utf8');
if (copied !== JSON.stringify(parsed) && copied !== readFileSync(source, 'utf8')) {
  console.error(`${POST_FILE} in ${OUTPUT_DIR} does not match the source file.`);
  process.exit(1);
}
console.log(`Copied ${POST_FILE} to ${OUTPUT_DIR}: ${(parsed as { url: string }).url}`);
