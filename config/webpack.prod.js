const WebpackCommon = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { merge } = require("webpack-merge");

/** @type {import('webpack').Configuration */
module.exports = merge(WebpackCommon,{
  mode : "production",
  module:{
    rules : [
      {
        test : /.css/,
        use : [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  devtool : "source-map",
  optimization : {
    splitChunks : {
      chunks : "all"
    }
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
})