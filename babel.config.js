module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@assets": "./src/assets",

            "@hooks": "./src/hooks",
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
