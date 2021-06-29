const path = require("path");

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "commonjs" : true,
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "import/extensions": ["warn", "always"],
    },
    "settings" : {
        "import/resolver":{
            webpack : {
                config : path.resolve(__dirname, "./config/webpack.dev.js"),
            }
        }
    }
};
