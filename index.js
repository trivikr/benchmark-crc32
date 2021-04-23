import benchmark from "benchmark";
import bufferCrc32 from "buffer-crc32";
import crc from "crc";
import crc32 from "crc-32";

const generateBuffer = (size) => {
  const buf = Buffer.alloc(size);
  for (let i = 0; i < size; i++) buf[i] = parseInt(Math.random() * 256);
  return buf;
};

const suite = new benchmark.Suite();
const testBuffer = generateBuffer(1024);

console.log(`CRC32 values returned:`);
console.log(`* crc: ${crc.crc32(testBuffer)}`);
console.log(`* crc-32: ${crc32.buf(testBuffer)}`);
console.log(`* buffer-crc32: ${bufferCrc32.unsigned(Buffer.from(testBuffer))}`);

console.log(`\nBenchmark:`);
suite
  .add("crc", () => {
    crc.crc32(testBuffer);
  })
  .add("crc-32", () => {
    crc32.buf(testBuffer);
  })
  .add("buffer-crc32", () => {
    bufferCrc32.unsigned(Buffer.from(testBuffer));
  })
  .on("cycle", (event) => {
    console.log(String(event.target));
  })
  .on("complete", () => {
    console.log("Fastest is " + suite.filter("fastest").map("name"));
  })
  // run async
  .run({ async: false });
