<br />

<p align="center">
  <a href="https://itty.dev/itty-time">
     <img src="https://github.com/kwhitley/itty-time/assets/865416/e45b9e04-a442-43b1-9961-59d62c62e88a" alt="itty-time" height="120" />
  </a>
  <br /><br />
<p>

<p align="center">
  <a href="https://npmjs.com/package/itty-time" target="_blank">
    <img src="https://img.shields.io/npm/v/itty-time.svg?style=flat-square" alt="npm version" />
  </a>
  <a href="https://itty.ing/https://edge.bundlejs.com/?q=itty-time" target="_blank">
    <img src="https://itty.ing/https://edge.bundlejs.com/?q=itty-time&badge&badge-style=flat-square" alt="bundle size" />
  </a>
  <a href="https://github.com/kwhitley/itty-time/actions/workflows/verify.yml" target="_blank">
    <img src="https://img.shields.io/github/actions/workflow/status/kwhitley/itty-time/verify.yml?branch=v1.x&style=flat-square" alt="build status" />
  </a>
  <a href="https://coveralls.io/github/kwhitley/itty-time?branch=v1.x" target="_blank">
    <img src="https://img.shields.io/coveralls/github/kwhitley/itty-time/v1.x?style=flat-square" alt="code coverage" />
  </a>
  <!-- <a href="https://npmjs.com/package/itty-time" target="_blank">
    <img src="https://img.shields.io/npm/dw/itty-time?style=flat-square" alt="weekly downloads" />
  </a> -->
  <a href="https://github.com/kwhitley/itty-time/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/kwhitley/itty-time?style=flat-square" alt="open issues" />
  </a>

  <br />

  <a href="https://discord.gg/53vyrZAu9u" target="_blank">
    <img src="https://img.shields.io/discord/832353585802903572?label=Discord&logo=Discord&style=flat-square&logoColor=fff" alt="join us on discord" />
  </a>
  <a href="https://github.com/kwhitley/itty-time" target="_blank">
    <img src="https://img.shields.io/github/stars/kwhitley/itty-time?style=social" alt="Repo stars" />
  </a>
  <a href="https://www.twitter.com/ittydev" target="_blank">
    <img src="https://img.shields.io/twitter/follow/ittydev.svg?style=social&label=Follow" alt="Follow ittydev" />
  </a>
</p>

###  [v1 Documentation](https://itty.dev/itty-time) &nbsp;| &nbsp; [Discord](https://discord.gg/53vyrZAu9u) 

---

Ultra-small (~450 bytes) library for simplifying date math and TTLs.

## Features

- Tiny. The entire library is ~450 bytes, or take only what you need.
- Works anywhere, period.
- Use plain text strings to describe durations.
- Get future dates and TTLs.
- Get human-readable string durations from numeric (ms) durations.

## Size Comparison
| library | size<sup>1</sup> | relative |
| --- | --- | --- |
| [itty-time](https://www.npmjs.com/package/itty-time) | 460 bytes | 

<sup>1: minified and gzipped</sup>

## seconds/ms
<h4>
  <code>seconds(duration: string) => number</code><br />
  <code>ms(duration: string) => number</code><br />
</h4>

TTL math is a maintenance nightmare. It's a pain to write, a pain to read, and when you update the math later, you'll probably forget to update the comment, causing all sorts of mayhem.

```ts
const TTL = 2 * 7 * 24 * 60 * 60 * 1000 // 2 weeks, right?
```

Here's a better way.

```ts
import { ms, seconds } from 'itty-time'

// to seconds
seconds('2 weeks') // 1209600

// to milliseconds
ms('2 weeks') // 1209600000

// handles multi-part inputs :)
ms('3 days, 2.5 hours, and 1 minute') // 268260000
```

## duration
<h4>
  <code>duration(ms: number) => string</code>
</h4>

Of course, we sometimes need to go the other direction.  Want to tell a user how long ago something happened?  How much time they have left?  

You could build it yourself, or import the fantastic [humanize-duration](https://www.npmjs.com/package/humanize-duration) library that inspired this, but at 6.3kB<sup>1</sup>, it's 20x the size of this function (300 bytes).

<sup>1: of course [humanize-duration](https://www.npmjs.com/package/humanize-duration) can also do much, much more.</sup>

```ts
import { duration } from 'itty-time'

duration(3750000)
// "1 hour, 2 minutes, 30 seconds"

// limit number of segments returned
duration(3750000, { parts: 2 })
// "1 hour, 2 minutes"

// change the delimiter
duration(3750000, { join: ' --> ' })
// "1 hour --> 2 minutes --> 30 seconds"

// or get the raw components
duration(3750000, { join: false })
/*
  [
    ['hour', 1],
    ['minutes', 2],
    ['seconds', 30]
  ]
/*
```

## datePlus
<h4>
  <code>datePlus(duration: string, from = new Date) => Date</code>
</h4>

Sometimes you need a TTL for some point in the future, but sometimes you need the actual date.  You could convert it all yourself... or use this.

```js
import { datePlus } from 'itty-time'

// from right now
datePlus('2 months, 1 week')

// or from a different date
datePlus('2 months', datePlus('1 week'))
```
