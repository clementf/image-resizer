module.exports = {
  port: 4353,
  basePath: require('./local').basePath,
  cacheDuration: 30 * 24 * 60 * 60 // 30 days in seconds
};
