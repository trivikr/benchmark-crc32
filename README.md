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

#### Node.js v14.16.1

```console
CRC32 values returned:
* crc: 547cbabe
* crc-32: 547cbabe
* buffer-crc32: 547cbabe

Benchmark:
crc x 403,570 ops/sec ±0.17% (95 runs sampled)
crc-32 x 439,028 ops/sec ±0.47% (95 runs sampled)
buffer-crc32 x 330,713 ops/sec ±1.00% (94 runs sampled)
Fastest is crc-32
```

#### Google Chrome 90.0.4430.85 (Official Build) (x86_64)

```console
CRC32 values returned:
* crc: 16c69f5f
* crc-32: 16c69f5f
* buffer-crc32: 16c69f5f

Benchmark:
crc x 394,844 ops/sec ±1.14% (66 runs sampled)
crc-32 x 395,786 ops/sec ±0.29% (65 runs sampled)
buffer-crc32 x 16,765 ops/sec ±0.19% (67 runs sampled)
Fastest is crc-32
```

#### Firefox browser v78.9.0esr

```console
CRC32 values returned:
* crc: e4a40920
* crc-32: e4a40920
* buffer-crc32: e4a40920

Benchmark:
crc x 180,744 ops/sec ±0.63% (65 runs sampled)
crc-32 x 374,624 ops/sec ±0.47% (67 runs sampled)
buffer-crc32 x 155,325 ops/sec ±1.25% (65 runs sampled)
Fastest is crc-32
```

[1]: https://www.npmjs.com/package/crc
[2]: https://www.npmjs.com/package/crc-32
[3]: https://www.npmjs.com/package/buffer-crc32
[4]: https://www.npmtrends.com/crc32-vs-crc-32-vs-buffer-crc32-vs-crc-vs-sse4_crc32
