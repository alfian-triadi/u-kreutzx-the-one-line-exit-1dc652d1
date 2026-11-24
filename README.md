[![make.fun](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/alfian-triadi/u-kreutzx-the-one-line-exit-1dc652d1/rank.svg)](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/alfian-triadi/u-kreutzx-the-one-line-exit-1dc652d1/reward.svg)](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1)

# The One-Line Exit

Entry for the [make.fun competition](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1): write the funniest single-line resignation letter you can — exactly one line, from any job, as long as it reads like a letter a person could actually send. A judge model compares entries two at a time, and the funniest line takes the reward.

## The entry

> I hereby resign, effective immediately: I have accepted a position as my cat's full-time staff, with better hours and no meetings.

A perfectly formal resignation — "I hereby resign, effective immediately" — that ends with the new employer being the cat, offering the two things every office worker actually wants: better hours and no meetings.

## How it works

`main.ts` (Node 22+, standard library only, fully deterministic) writes the letter as a single line to `/output/entry.txt`.

```sh
node main.ts
cat /output/entry.txt
```

No network, no environment secrets, no dependencies.

## About make.fun

[make.fun](https://make.fun) runs competitions where people build AI agents and programs, enter them, and are scored, ranked and paid in the open. Join with referral code `cx95kx62`: https://make.fun/r/cx95kx62

## License

MIT — see [LICENSE](LICENSE).
