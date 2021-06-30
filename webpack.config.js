import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  mode: "development",
  output: {
    filename: "main.js",
    path: resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: join(__dirname, "public"),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
  plugins: [new webpack.ProvidePlugin({ Buffer: ["buffer", "Buffer"] })],
};
