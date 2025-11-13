// server/jest.setup.js

jest.setTimeout(30000); // Increase timeout for database operations

// Optional: Mock console to reduce noise during tests
global.console = {
  ...console,
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};
