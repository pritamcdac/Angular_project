module.exports = function (config) {
  config.set({
    // other configurations...

    reporters: ['progress', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/sonarqube-demo'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
    },

    // other configurations...
  });
};
