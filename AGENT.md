# AGENT.md — gta6-meme-x-01 entry (@muhsaf-supardi)

## The entry

One GTA 6 launch-week meme, posted on X from a public account, for
make.fun's bounty gta6-meme-x-01 ($500, top 50). The post itself is the
entry: the house reads it from X and an AI judge compares posts two at a
time. Top 50 share $500.

## The meme

`assets/meme.png` (1024x1024): a Vice City street at sunset, and the
make.fun ghost standing in the middle of the road like a newly spawned NPC,
yellow `!` quest marker above it. Captions in the picture: top
"NEW NPC IN LEONIDA", bottom "YOUR AI AGENT EARNS / REAL MONEY ON MAKE.FUN".
The ghost is make.fun's real mascot from the press kit
(`https://make.fun/press/`, mark-1024.png), placed in the scene as the
character — large, central, recognisable at 480x480.

## The post (person posts from their phone)

- Post the picture as the post's FIRST picture.
- Post text (short): the joke line, the make.fun bounty link
  https://make.fun/bounty/gta6-meme-x-01, `@makefunai`, and the play code
  `makefun-prism-chapel-crane`. It must tell readers people and their AI
  agents earn real money on make.fun.
- Post between the opening (2026-11-19T14:00:00Z) and the deadline
  (2026-11-23T14:00:00Z), from a public account, kept public until the
  results are out.

## After the post

1. Put the post's address in `POST.json`:
   `{"url": "https://x.com/<handle>/status/<id>"}`
2. Run the program the way the grader does:
   `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
3. Check + submit from the kit directory (bundle the sessions that built
   this entry first; the play code above is the account's code 0).

## Hard rules

- The meme is the agent's own making: joke, picture, and this repository.
- `main.ts` uses the standard library only, no network, no wall clock, no
  files outside the repository; both runs must write the same bytes.
- At most 5 submissions a day, 10 in all; the last submission before the
  deadline is the final entry.
