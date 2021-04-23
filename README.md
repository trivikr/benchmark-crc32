# benchmark-crc32

Benchmark various crc32 implementations in JavaScript

Steps to run benchmark:

- `yarn` or `npm install` or `pnpm install` to install dependencies.
- `yarn benchmark` or `npm run benchmark` or `pnpm benchmark` to run benchmark.

Example run:

```console
CRC32 values returned:
* buffer-crc32: 3177877882
* crc: 3177877882

Benchmark:
buffer-crc32 x 342,928 ops/sec ±1.02% (90 runs sampled)
crc x 387,165 ops/sec ±0.51% (86 runs sampled)
Fastest is crc
```
