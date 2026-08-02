module.exports = {
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js', 'src/**/*.spec.js', 'src/**/*.test.js', 'src/**/*.ts'],
}
