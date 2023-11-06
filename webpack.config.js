const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    open: true,
  },
};

// mode: sets the mode for the build process(development or production)
// entry: Specifies the entry point for the application
// output: Defines where the bundle files will be saved
// module.rules: Determines how different file types shod be processed
// resolve.extensions: Specifies which file extensions Webpack should resolve
// plugins: Configure additional plugins, such as the HtmlWebpackPlugin
// devServer: Sets up the development server configuration
