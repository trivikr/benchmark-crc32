import { join } from "path";
import { fileURLToPath } from "url";

export const mode = "development";
export const entry = {
  main: "./src/index.js",
};
export const devServer = {
  contentBase: join(fileURLToPath(import.meta.url), "public"),
  compress: true,
  port: 9000,
  open: true,
  hot: true,
};
