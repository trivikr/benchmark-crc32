# benchmark-crc32

Benchmark various crc32 implementations in JavaScript.

Steps to run benchmark:

- `yarn` or `npm install` or `pnpm install` to install dependencies.
- `yarn benchmark` or `npm run benchmark` or `pnpm benchmark` to run benchmark.

## CRC32

We compare [crc][1], [crc-32][2] and [buffer-crc32][3] as those are the
three most downloaded as per [npm trends][4].

### Example run

#### Node.js

```console
CRC32 values returned:
* crc: 3661861187
* crc-32: 3661861187
* buffer-crc32: 3661861187

Benchmark:
crc x 423,289 ops/sec ±1.04% (91 runs sampled)
crc-32 x 440,881 ops/sec ±0.73% (95 runs sampled)
buffer-crc32 x 338,095 ops/sec ±0.82% (93 runs sampled)
Fastest is crc-32
```

#### Brave browser (Chromium)

```console
CRC32 values returned:
* crc: 3296144236
* crc-32: 3296144236
* buffer-crc32: 3296144236

Benchmark:
crc x 473,526 ops/sec ±0.26% (67 runs sampled)
crc-32 x 449,748 ops/sec ±0.36% (66 runs sampled)
buffer-crc32 x 14,438 ops/sec ±1.38% (65 runs sampled)
Fastest is crc
```

#### Firefox

```console
CRC32 values returned:
* crc: 1539917978
* crc-32: 1539917978
* buffer-crc32: 1539917978

Benchmark: index.js:33:9
crc x 184,353 ops/sec ±0.26% (63 runs sampled)
crc-32 x 380,388 ops/sec ±0.75% (65 runs sampled)
buffer-crc32 x 80,536 ops/sec ±3.58% (53 runs sampled)
Fastest is crc-32
```

[1]: https://www.npmjs.com/package/crc
[2]: https://www.npmjs.com/package/crc-32
[3]: https://www.npmjs.com/package/buffer-crc32
[4]: https://www.npmtrends.com/crc32-vs-crc-32-vs-buffer-crc32-vs-crc-vs-sse4_crc32
