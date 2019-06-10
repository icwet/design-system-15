// prettier-ignore
const path = require("path");

module.exports = {
  entry: {
    script: "./src/script.js",
    "template-engine": "./src/template-engine.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", { loader: "css-loader", options: { importLoaders: 1 } }, "postcss-loader"]
      }
    ]
  }
};
