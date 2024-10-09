// jest.config.js in the Jest-consuming project
export default {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(test-publish-es6-package)/)", // Ensure that Jest transforms this package
  ],
  moduleNameMapper: {
    "^test-publish-es6-package$":
      "<rootDir>/node_modules/test-publish-es6-package/lib/index.js",
  },
  moduleDirectories: ["node_modules", "src"],
};
