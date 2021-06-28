const WebpackCommon = require("./webpack.common");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { merge } = require("webpack-merge");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = merge(WebpackCommon,{
  mode : "development",
  module:{
    rules : [
      {
        test : /.css/,
        use : ["style-loader", "css-loader"]
      }
    ]
  },
  devtool : "eval-source-map",
  target : "web",
  devServer: {
    port: 3000,
    contentBase: "./build",
    open: true,
    hot: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ]
})