/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^~components/(.*)$': '<rootDir>/src/components/$1',
    '^~src/(.*)$': '<rootDir>/src/$1',
    '^~utils/(.*)$': '<rootDir>/src/utils/$1',
    '^~reusables/(.*)$': '<rootDir>/src/components/reusables/$1',
    '^~icons/(.*)$': '<rootDir>/src/assets/icons/$1',
    '^~assets/(.*)$': '<rootDir>/src/assets/$1',
    '^~ts-types/(.*)$': '<rootDir>/src/ts-types/$1',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
