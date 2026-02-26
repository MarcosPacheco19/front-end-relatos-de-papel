export default {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverage: false,
  verbose: true,
  // Configuración para visualización en tiempo real
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './test-reports',
      filename: 'e2e-report.html',
      expand: true,
    }]
  ],
  // Configuración para captura de pantallazos
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
};
