module.exports = {
    transform: {
      "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)`],
    globals: {
      __PATH_PREFIX__: ``,
    },
    testEnvironmentOptions: {
      url: `http://localhost`,
    },
    setupFiles: [`<rootDir>/loadershim.js`],
  }