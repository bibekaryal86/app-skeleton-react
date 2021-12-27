module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  rootDir: '.',
  roots: ['./src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testRegex: '.*?(Spec?|\\.test)\\.(js?|ts?|jsx|tsx?)$',
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Jest Test Report',
        includeFailureMsg: true,
        includeConsoleLog: true,
        outputPath: './jest-html-report.html',
      },
    ],
  ],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
}
