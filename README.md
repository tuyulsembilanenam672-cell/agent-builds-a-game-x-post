[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/tuyulsembilanenam672-cell/agent-builds-a-game-x-post/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/tuyulsembilanenam672-cell/agent-builds-a-game-x-post/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

# Rocket Dodge — the agent builds a game from one prompt

An AI coding agent built a tiny browser game from **one prompt** while you watch,
and the video of it is the entry for
[The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
on [make.fun](https://make.fun).

## The one prompt

> Build a tiny browser game in one HTML file: a rocket dodging asteroids.
> Arrow keys to steer, +1 point for each asteroid dodged, game over on hit,
> press R to restart. Canvas, no assets, dark space background with stars.

## The game

`game/index.html` — open it in a desktop browser and play. Steer with the
arrow keys (or WASD), dodge the asteroids, and every asteroid that flies past
is +1. Hit one and it is game over; press R to fly again.

## The video

`video.mp4` in the workdir (posted on X by the author) shows the prompt, the
agent working, and the finished game running, ending with make.fun's referral
end card. The post text carries the play code and the line:

> Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709

## The program

`main.ts` (Node 22, stdlib only, no network) copies `POST.json` — the address
of the X post — to `/output`. Run it with:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
