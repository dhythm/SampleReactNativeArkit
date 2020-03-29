```
touch README.md
mkdir .vscode
cat <<EOF > .vscode/settings.json
{
  "files.exclude": {
    "node_modules": true
  },
  "search.exclude": {
    "yarn.lock": true,
    "android": true,
    "ios": true
  },
  "editor.gotoLocation.multipleDefinitions": "goto",
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  }
}
EOF
```

```
yarn add -D typescript react-native-typescript-transformer ts-jest @types/jest @types/react @types/react-native @types/react-test-renderer
yarn tsc --init --pretty --jsx react
cat <<EOF > rn-cli.config.js
module.exports = {
  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer");
  },
  getSourceExts() {
    return ["ts", "tsx"];
  }
};
EOF
```

```
yarn add -D eslint eslint-config-prettier eslint-plugin-local eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native
touch .eslintignore .eslintplugin.js
cat <<EOF > .eslintrc.json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    }
  },
  "plugins": [
    "@typescript-eslint/eslint-plugin",
    "react",
    "react-native",
    "react-hooks"
  ],
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "react-native/react-native": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-explicit-any": [
      "warn",
      {
        "ignoreRestArgs": true
      }
    ],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react/prop-types": "off", // checked by typescript
    "react/display-name": "warn"
  },
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      "pragma": "React", // Pragma to use, default to "React"
      "version": "detect" // React version. "detect" automatically picks the version you have installed.
    },
    "propWrapperFunctions": [
      // The names of any function used to wrap propTypes, e.g. . If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      {
        "property": "freeze",
        "object": "Object"
      },
      {
        "property": "myFavoriteWrapper"
      }
    ],
    "linkComponents": [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {
        "name": "Link",
        "linkAttribute": "to"
      }
    ]
  },
  "overrides": [
    {
      "files": ["*.js", "*.ts"]
    }
  ]
}
EOF
```

```
yarn add -D babel-preset-react-native babel-plugin-module-resolver babel-plugin-styled-components @babel/core @babel/preset-env @babel/preset-typescript
cat <<EOF > babel.config.js
module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
        alias: {},
      },
    ],
    'babel-plugin-styled-components',
  ],
};
EOF
```

```
yarn add -D prettier
cat <<EOF > .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "always"
}
EOF
yarn add -D lint-staged husky
```

```
yarn add -D reactotron-react-native
cat <<EOF > ReactotronConfig.js
import Reactotron from 'reactotron-react-native';

Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

console.tron = Reactotron;
console.log = Reactotron.log;
console.tron.log('Welcome to Reactotron')

EOF
```