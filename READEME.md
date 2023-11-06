# React Project Without Create React App

#### package.json 파일 생성

`npm init -y`

#### React, ReactDOM 설치

`npm install react react-dom`

#### Babel devDependencies 설치

`npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader`

```
// .babelrc
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

#### Webpack 설치

`npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin css-loader style-loader`

```
// webpack.config.js
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
```

### 파일 설치

```
my-app/
  ├── public/
      ├── index.html
  ├── src/
      ├── App.js
      ├── index.js
  ├── .babelrc
  ├── package.json
  ├── webpack.config.js
```

```
// public/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Custom React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

```
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

```
// src/App.js
import React from 'react';

const App = () => {
  return <div>Hello, word!</div>;
};
export default App;
```

#### 실행

`npm start`
