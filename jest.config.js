const { jsWithTs } = require('ts-jest/presets')

module.exports = {
  roots: ['<rootDir>'],
  rootDir: './src',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/../testing/setupTests.ts'],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'module.scss',
    'module.css',
    'scss',
  ],
  moduleNameMapper: {
    '\\.(css|scss|sass|less)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/../testing/fileMock.js',
    '^@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    ...jsWithTs.transform,
  },
  coverageDirectory: '../test-reports',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/testing',
    '<rootDir>/dist',
    '<rootDir>/public',
  ],
}
