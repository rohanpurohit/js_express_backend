const path = require("path");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
  },

  entry: path.join(__dirname, "typescript", "index.ts"),

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
