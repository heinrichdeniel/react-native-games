module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "react-native/react-native": true    
  },
  "plugins": [
    "react",
    "react-native"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "16.3.1", // React version, default to the latest React stable release
    },
  },
  "rules": {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react/prop-types": 0,
    "react/no-unused-prop-types": 2,
    "react/no-unused-state": 2,
    "react/prefer-es6-class": [2],
    "react/jsx-closing-tag-location": 2,
    "react/jsx-closing-bracket-location": [2, "after-props"],
    "react/jsx-curly-spacing": [2, "never", {
      "allowMultiline": false,
      "spacing": {"objectLiterals": "always"}
    }],
    "react/jsx-indent": [2, 2],
    "react/jsx-no-undef": [2],
    "react/jsx-tag-spacing": 2,
    "react/jsx-uses-vars": 2
  }
};
