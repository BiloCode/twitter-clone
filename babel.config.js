module.exports = {
  "presets": [
    [
      "@babel/preset-env", 
      {
        "useBuiltIns" : "entry",
        "corejs": 3
      }
    ],
    [
      "@babel/preset-react",{
        "runtime" : "automatic"
      }
    ],
    "@babel/preset-typescript",
  ],
  "plugins" : ["babel-plugin-styled-components"]
}