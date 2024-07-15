const { TestEnvironment } = require("jest-environment-jsdom");

// module.exports = {
//     TestEnvironment: 'jest-environment-jsdom',
//     setupFiles: ['./jest.setup.js'],
//     moduleNameMapper: {
//         "^animate.css$": "<rootDir>/mocks/animate.css.js",
//       },
      
// transformIgnorePatterns: ["/node_modules/(?!query-string)/"],
// };

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js']
}




