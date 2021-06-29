const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");

/** @type {import('webpack').Configuration */
module.exports = {
  entry : path.resolve(__dirname, "../src/index.tsx"),
  output : {
    filename : "[name].[contenthash].js",
    path : path.resolve(__dirname, "../build")
  },
  module:{
    rules : [
      {
        test: /.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use : "babel-loader",
      },
      {
        type : "asset/resource",
        test : /.(jpg|jpeg|png|svg)/,
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template : path.resolve(__dirname, "../public/index.html")}),
  ],
  resolve : {
    extensions : [".js",".tsx",".jsx",".ts"],
    preferRelative: true,
    alias : {
      "@templates" : path.resolve(__dirname, "../src/shared/components/templates"),
      "@atoms" : path.resolve(__dirname, "../src/shared/components/atoms"),
      "@molecules" : path.resolve(__dirname, "../src/shared/components/molecules"),
      "@organisms" : path.resolve(__dirname, "../src/shared/components/organisms"),
      "@pages" : path.resolve(__dirname, "../src/shared/components/pages"),
      "@store" : path.resolve(__dirname, "../src/store"),
      "@router" : path.resolve(__dirname, "../src/router"),
      "@hooks" : path.resolve(__dirname, "../src/shared/hooks"),
      "@context" : path.resolve(__dirname, "../src/shared/context"),
      "@style-config": path.resolve(__dirname, "../src/config"),
      "@application": path.resolve(__dirname, "../src/application"),
      "@assets" : path.resolve(__dirname, "../src/assets")
    }
  }
}