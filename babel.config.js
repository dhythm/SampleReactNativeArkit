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
