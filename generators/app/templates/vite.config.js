const path = require("path");

const resolve = (filePath) => path.resolve(__dirname, filePath);
/**
 * @type {import('vite').UserConfig}
 *
 * **/
const config = {
  host: "0.0.0.0",
  port: "8080",
  open: true,
  https: false,
  base: "./",
  outDir: "dist",
  /* entry: {
    app: resolve("./src/main.js"),
  }, */
  alias: {
    "/@/": resolve("./src"),
  },
  proxy: {
    "/api": {
      target: "http://jsonplaceholder.typicode.com",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
  plugins: [],
};

module.exports = config;
