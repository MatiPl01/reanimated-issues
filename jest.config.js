module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: ['jest-runner'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  clearMocks: true,
};
