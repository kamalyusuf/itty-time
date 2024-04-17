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
  <a href="https://npmjs.com/package/itty-time" target="_blank">
    <img src="https://img.shields.io/npm/dw/itty-time?style=flat-square" alt="weekly downloads" />
  </a>
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

Tiny (~500 bytes) time library for simplifying date math and TTLs.

## Features

- Tiny. ~500 bytes gzipped total, and tree-shakeable even further.
- [TypeScript](https://itty.dev/itty-time/typescript). Powerfully (and flexibly) typed for any environment.
- [100% Test Coverage](https://coveralls.io/github/kwhitley/itty-time?branch=v1.x). Bulletproof for production peace-of-mind.
- Use plain text strings to describe durations.
- Get future dates and TTLs.
- Get human-readable string durations from numeric (ms) durations.

## Examples

### Converting human-readable durations to seconds/ms
```ts
import { toMs, toSeconds } from 'itty-time'

// to seconds
toSeconds('1 hour') // 1 * 60 * 60 === 3600

// to milliseconds
toMs('1 hour') // 1 * 60 * 60 * 1000 === 3600000

// handles elaborate inputs
toSeconds('3 days, 2.5 hours, and 1 minute')
```

### Converting ms to human-readable durations
```ts
import { toDuration } from 'itty-time'

// string durations
toDuration(1 * 60 * 60 * 1000 + 2.5 * 60 * 1000)
// "1 hour, 2 minutes, 30 seconds"

// limit number of segments
toDuration(1 * 60 * 60 * 1000 + 2.5 * 60 * 1000, { parts: 2 })
// "1 hour, 2 minutes"

// change the delimiter
toDuration(1 * 60 * 60 * 1000 + 2.5 * 60 * 1000, { join: '|' })
// "1 hour|2 minutes|30 seconds"

// or get the raw components
toDuration(1 * 60 * 60 * 1000 + 2.5 * 60 * 1000, { join: false })
// [['hour', 1],['minutes', 2],['seconds', 30]]
```

### Adding time to dates
```js
import { datePlus } from 'itty-time'

// from right now
datePlus('2 months, 1 week') // 2024-12-23T00:11:58.534Z

// or from a different date
datePlus('2 months', datePlus('1 week')) // 2024-12-23T00:11:58.534Z
```
