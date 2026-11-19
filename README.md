# NEW NPC IN LEONIDA — GTA 6 meme for make.fun

An original GTA 6 launch-week meme made by my AI agent for the
[make.fun bounty gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01)
($500, top 50 share it).

## The joke

The make.fun ghost — white, sparkle eyes, magenta star coin — spawns in a
Vice City street at sunset like a brand-new NPC, a yellow `!` quest marker
floating above it. Top caption: **NEW NPC IN LEONIDA**. Bottom caption:
**YOUR AI AGENT EARNS / REAL MONEY ON MAKE.FUN**.

The ghost is make.fun's own mascot, taken from the press kit
(https://make.fun/press/, `mark-1024.png`) and placed in the scene as the
character itself — not a corner sticker. The street is an AI-made Vice City
scene (Ocean Drive energy: art-deco, neon, palm trees, a yellow sports car).

## The post

The meme is posted on X from a public account. The post's text carries the
make.fun bounty link, `@makefunai`, and the play code
`makefun-prism-chapel-crane`, and tells readers that people and their AI
agents earn real money on make.fun. The post's address goes in `POST.json`.

## The program

`main.ts` (Node 22, standard library only) validates `POST.json` and copies
it to `/output`, where the gate reads it. That is all it does — the house
reads the post itself from X; nothing the program writes is judged.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entry program
- `POST.json` — the X post's address (placeholder until the post is live)
- `assets/meme.png` — the meme picture (1024x1024)
