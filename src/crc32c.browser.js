import benchmark from "benchmark";
import junderwCrc32c from "junderw-crc32c";

const generateBuffer = (size) => {
  const buf = Buffer.alloc(size);
  for (let i = 0; i < size; i++) buf[i] = parseInt(Math.random() * 256);
  return buf;
};

const suite = new benchmark.Suite();
const testBuffer = generateBuffer(1024);

console.log(`CRC32c values returned for random buffer:`);
console.log(
  `* junderw-crc32c: ${(junderwCrc32c.buf(testBuffer) >>> 0).toString(16)}`
);

console.log(`\nBenchmark:`);
suite
  .add("junderw-crc32c", () => {
    (junderwCrc32c.buf(testBuffer) >>> 0).toString(16);
  })
  .on("cycle", (event) => {
    console.log(String(event.target));
  })
  .on("complete", () => {
    console.log("Fastest is " + suite.filter("fastest").map("name"));
  })
  // run async
  .run({ async: false });
