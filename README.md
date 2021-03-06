# benchmark-crc32

Benchmark various crc32 implementations in JavaScript.

Steps to run benchmark:

- `yarn` or `npm install` or `pnpm install` to install dependencies.

## CRC32

We compare [crc][1], [crc-32][2] and [buffer-crc32][3] as those are the
three most downloaded as per [npm trends][4].

- `yarn benchmark:crc32` or `npm run benchmark:crc32` or `pnpm benchmark:crc32`
  to run benchmark for crc32.
- `yarn benchmark:crc32:web` or `npm run benchmark:crc32:web` or
  `pnpm benchmark:crc32:web` to run benchmark for crc32 on the browser.

### Example run

#### Node.js v16.4.0

```console
CRC32 values returned for random buffer:
* crc: bbe00242
* crc-32: bbe00242
* buffer-crc32: bbe00242
* @aws-crypto/crc32: bbe00242

Benchmark:
crc x 418,858 ops/sec ±0.33% (91 runs sampled)
crc-32 x 426,337 ops/sec ±0.25% (96 runs sampled)
buffer-crc32 x 318,404 ops/sec ±0.33% (94 runs sampled)
@aws-crypto/crc32 x 74,763 ops/sec ±0.90% (95 runs sampled)
Fastest is crc-32
```

#### Brave browser v1.26.67 (Chromium: 91.0.4472.114)

```console
CRC32 values returned for random buffer:
* crc: 5d92cd44
* crc-32: 5d92cd44
* buffer-crc32: 5d92cd44
* @aws-crypto/crc32: 5d92cd44

Benchmark:
crc x 376,443 ops/sec ±1.66% (62 runs sampled)
crc-32 x 370,629 ops/sec ±1.86% (61 runs sampled)
buffer-crc32 x 14,292 ops/sec ±1.34% (63 runs sampled)
@aws-crypto/crc32 x 56,918 ops/sec ±1.29% (62 runs sampled)
Fastest is crc
```

#### Firefox browser v78.10.1esr

```console
CRC32 values returned for random buffer:
* crc: b82b29d7
* crc-32: b82b29d7
* buffer-crc32: b82b29d7
* @aws-crypto/crc32: b82b29d7

Benchmark: crc32.js:36:9
crc x 188,843 ops/sec ±0.48% (63 runs sampled)
crc-32 x 370,060 ops/sec ±0.85% (67 runs sampled)
buffer-crc32 x 80,874 ops/sec ±2.67% (64 runs sampled)
@aws-crypto/crc32 x 15,069 ops/sec ±1.78% (64 runs sampled)
Fastest is crc-32
```

## CRC32C

We compare [fast-crc32c][5], [sse4_crc32][6] and [junderw-crc32c][7].

- `yarn benchmark:crc32c` or `npm run benchmark:crc32c` or `pnpm benchmark:crc32c`
  to run benchmark for crc32c.
- `yarn benchmark:crc32c:web` or `npm run benchmark:crc32c:web` or
  `pnpm benchmark:crc32c:web` to run benchmark for crc32c on the browser.

### Example run

#### Node.js v16.4.0

```console
CRC32c values returned for random buffer:
* fast-crc32c: a51b7a5f
* sse4_crc32 (sw): a51b7a5f
* sse4_crc32 (hw): a51b7a5f
* junderw-crc32c: a51b7a5f

Benchmark:
fast-crc32c x 1,572,668 ops/sec ±0.46% (93 runs sampled)
sse4_crc32 (sw) x 1,550,894 ops/sec ±0.36% (91 runs sampled)
sse4_crc32 (hw) x 1,521,460 ops/sec ±1.16% (93 runs sampled)
junderw-crc32c x 419,697 ops/sec ±0.37% (87 runs sampled)
Fastest is fast-crc32c
```

#### Brave browser v1.26.67 (Chromium: 91.0.4472.114)

```console
CRC32c values returned for random buffer:
* junderw-crc32c: 6b5b739d

Benchmark:
junderw-crc32c x 391,254 ops/sec ±0.83% (66 runs sampled)
Fastest is junderw-crc32c
```

#### Firefox browser v78.10.1esr

```console
CRC32c values returned for random buffer:
* junderw-crc32c: 69c0767e

Benchmark:
junderw-crc32c x 371,923 ops/sec ±0.48% (67 runs sampled)
Fastest is junderw-crc32c
```

[1]: https://www.npmjs.com/package/crc
[2]: https://www.npmjs.com/package/crc-32
[3]: https://www.npmjs.com/package/buffer-crc32
[4]: https://www.npmtrends.com/crc32-vs-crc-32-vs-buffer-crc32-vs-crc-vs-sse4_crc32
[5]: https://www.npmjs.com/package/fast-crc32c
[6]: https://www.npmjs.com/package/sse4_crc32
[7]: https://www.npmjs.com/package/junderw-crc32c
