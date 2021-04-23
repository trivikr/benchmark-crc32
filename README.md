# benchmark-crc32

Benchmark various crc32 implementations in JavaScript.

Steps to run benchmark:

- `yarn` or `npm install` or `pnpm install` to install dependencies.
- `yarn benchmark` or `npm run benchmark` or `pnpm benchmark` to run benchmark.

## CRC32

We compare [crc][1], [crc-32][2] and [buffer-crc32][3] as those are the
three most downloaded as per [npm trends][4].

### Example run

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

[1]: https://www.npmjs.com/package/crc
[2]: https://www.npmjs.com/package/crc-32
[3]: https://www.npmjs.com/package/buffer-crc32
[4]: https://www.npmtrends.com/crc32-vs-crc-32-vs-buffer-crc32-vs-crc-vs-sse4_crc32
