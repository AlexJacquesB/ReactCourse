const webpackConfig = require("./webpack.config");

module.exports = {
  ...webpackConfig,
  mode: "production",
  devtool: false,
};          