const config = require('./webpack.config.js');
const webpack = require('webpack');
const express = require('express');
const app = express();

console.log("**************CONFIG:", config)
config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production")
    }
  })
);

app.listen(process.env.PORT || 9090);

module.exports = config;
