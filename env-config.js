const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/portfolio'
  : '';

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
};