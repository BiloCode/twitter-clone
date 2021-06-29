module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
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
        "@typescript-eslint",
        "import"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "import/extensions": [
          "error",
          "always",
          {
            "ts": "never",
            "tsx": "never",
            "js": "never",
            "jsx": "never"
          }
        ],
        "max-len" : "off",
        "import/prefer-default-export" : "off",
        "react/require-default-props" : "off",
        "react/no-array-index-key" : "off"
    },
    "settings" : {
      "import/resolver":{
        typescript : {}
      }
  }
};
