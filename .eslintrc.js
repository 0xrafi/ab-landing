module.exports = {
    parser: "@babel/eslint-parser",
    settings: {
        "react": {
            "version": "detect"
        }
    },
    env: {
        "browser": true,
        "es2022": true,
        "node": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module",
        "requireConfigFile": false,
        "babelOptions": {
            "presets": ["@babel/preset-react"]
         }
    },
    plugins: [
        "react", "jsx"
    ],
    rules: {
    },
    overrides: [{
        "files": ["**/*.ts","**/*.tsx"],
        "parser": 'typescript-eslint-parser',
        "rules": {
          'no-undef': 'off'
        }
    }]
};
