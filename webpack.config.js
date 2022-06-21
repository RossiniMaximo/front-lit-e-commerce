const webpack = require("webpack");
const path = require("path");
const LiveServer = require("live-server");

const dev = process.env.NODE_ENV == "development";

if (dev) {
  LiveServer.start({
    root: ".",
    file: "./index.html",
  });
}

module.exports = {
  watch: dev,
  entry: "./src/index.tsx",
  plugins: [
    new webpack.EnvironmentPlugin({
      API_URL: "http://localhost:3000/api",
      DEBUG: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
