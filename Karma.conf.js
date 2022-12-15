module.exports = function(config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [{ pattern: "src/**/*.ts" }, { pattern: "src/**/*.spec.ts" }],
    plugins: [
      "karma-jasmine",
      "karma-typescript",
      "karma-chrome-launcher",
      "karma-coverage-istanbul-reporter"
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    reporters: [
      "progress",
      "karma-typescript",
      "coverage-istanbul",
      "coverage"
    ],
    browsers: ["Chrome"],
    singleRun: true,
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
      reports: {
        html: "coverage",
        "text-summary": ""
      }
    },
    coverageIstanbulReporter: {
      reports: ["html", "lcovonly"],
      fixWebpackSourcePaths: true
    },
    coverageReporter: {
      type: "html",
      dir: "coverage/"
    }
  });
};
