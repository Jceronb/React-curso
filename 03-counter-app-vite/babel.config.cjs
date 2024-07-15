module.exports = {
    presets: [
             ['@babel/preset-env', {targets: {esmodules: true}}],
             ['@babel/preset-react' , {runtime: 'automatic'}],
             
             ],
  };

// module.exports = {
//     testEnvironment: 'jest-environment-jsdom',
//     setupFiles: ['./jest.setup.js'],
//     transformIgnorePatterns: [],
// }





