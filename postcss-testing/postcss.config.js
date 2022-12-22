module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 1,
    }),
    require('precss'),
    require('postcss-import'),
    require('postcss-assets')({
      loadPaths: ['out/img'],
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
