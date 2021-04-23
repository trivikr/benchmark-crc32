# benchmark-crc32

Benchmark various crc32 implementations in JavaScript.

Steps to run benchmark:

- `yarn` or `npm install` or `pnpm install` to install dependencies.
- `yarn benchmark` or `npm run benchmark` or `pnpm benchmark` to run benchmark.
- `yarn benchmark:web` or `npm run benchmark:web` or `pnpm benchmark:web` to run
  benchmark on the browser.

## CRC32

We compare [crc][1], [crc-32][2] and [buffer-crc32][3] as those are the
three most downloaded as per [npm trends][4].

### Example run

#### Node.js v16.0.0

```console
CRC32 values returned:
* crc: 42b8e4eb
* crc-32: 42b8e4eb
* buffer-crc32: 42b8e4eb

Benchmark:
crc x 359,715 ops/sec ±1.21% (92 runs sampled)
crc-32 x 431,613 ops/sec ±0.78% (94 runs sampled)
buffer-crc32 x 294,471 ops/sec ±1.08% (90 runs sampled)
Fastest is crc-32
```

#### Brave browser v1.23.71 (Chromium-based)

```console
CRC32 values returned:
* crc: 6d790bbc
* crc-32: 6d790bbc
* buffer-crc32: 6d790bbc

Benchmark:
crc x 391,421 ops/sec ±1.50% (64 runs sampled)
crc-32 x 392,587 ops/sec ±0.82% (66 runs sampled)
buffer-crc32 x 14,641 ops/sec ±0.50% (66 runs sampled)
Fastest is crc-32
```

#### Firefox browser v78.9.0esr

```console
CRC32 values returned:
* crc: 57e49b3d
* crc-32: 57e49b3d
* buffer-crc32: 57e49b3d

Benchmark: index.js:33:9
crc x 181,631 ops/sec ±0.38% (63 runs sampled)
crc-32 x 374,614 ops/sec ±0.73% (65 runs sampled)
buffer-crc32 x 77,648 ops/sec ±3.36% (58 runs sampled)
Fastest is crc-32
```

[1]: https://www.npmjs.com/package/crc
[2]: https://www.npmjs.com/package/crc-32
[3]: https://www.npmjs.com/package/buffer-crc32
[4]: https://www.npmtrends.com/crc32-vs-crc-32-vs-buffer-crc32-vs-crc-vs-sse4_crc32
