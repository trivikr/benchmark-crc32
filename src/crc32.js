import benchmark from "benchmark";
import bufferCrc32 from "buffer-crc32";
import crc from "crc";
import crc32 from "crc-32";
import { Crc32 as awsCryptoCrc32 } from "@aws-crypto/crc32";

if (typeof window !== "undefined") {
  // Fix to run benchmark in browser
  // Ref: https://github.com/bestiejs/benchmark.js/issues/208#issue-342996334
  window.define = {};
  window.define.amd = {};
}

const generateBuffer = (size) => {
  const buf = Buffer.alloc(size);
  for (let i = 0; i < size; i++) buf[i] = parseInt(Math.random() * 256);
  return buf;
};

const suite = new benchmark.Suite();
const testBuffer = generateBuffer(1024);

console.log(`CRC32 values returned for random buffer:`);
console.log(`* crc: ${crc.crc32(testBuffer).toString(16)}`);
console.log(`* crc-32: ${(crc32.buf(testBuffer) >>> 0).toString(16)}`);
console.log(`* buffer-crc32: ${bufferCrc32.unsigned(testBuffer).toString(16)}`);
console.log(
  `* @aws-crypto/crc32: ${new awsCryptoCrc32()
    .update(testBuffer)
    .digest(16)
    .toString(16)}`
);

const awsCryptoCrc32Obj = new awsCryptoCrc32();
console.log(`\nBenchmark:`);
suite
  .add("crc", () => {
    crc.crc32(testBuffer).toString(16);
  })
  .add("crc-32", () => {
    (crc32.buf(testBuffer) >>> 0).toString(16);
  })
  .add("buffer-crc32", () => {
    bufferCrc32.unsigned(testBuffer).toString(16);
  })
  .add("@aws-crypto/crc32", () => {
    awsCryptoCrc32Obj.update(testBuffer).digest(16).toString(16);
  })
  .on("cycle", (event) => {
    console.log(String(event.target));
  })
  .on("complete", () => {
    console.log("Fastest is " + suite.filter("fastest").map("name"));
  })
  // run sync
  .run({ async: false });
