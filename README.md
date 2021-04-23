# benchmark-crc32

Benchmark various crc32 implementations in JavaScript

Steps to run benchmark:

- `yarn` or `npm install` or `pnpm install` to install dependencies.
- `yarn benchmark` or `npm run benchmark` or `pnpm benchmark` to run benchmark.

Example run:

```console
CRC32 values returned:
* crc: 142849690
* crc-32: 142849690
* buffer-crc32: 142849690

Benchmark:
crc x 397,547 ops/sec ±0.36% (94 runs sampled)
crc-32 x 460,140 ops/sec ±0.40% (91 runs sampled)
buffer-crc32 x 343,503 ops/sec ±1.11% (93 runs sampled)
Fastest is crc-32
```
