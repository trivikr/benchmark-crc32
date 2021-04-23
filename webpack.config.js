import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  devServer: {
    contentBase: join(__dirname, "public"),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
};
