module.exports = {
    extends: [
      'react-app',
      'react-app/jest',
      'plugin:jest-dom/recommended',
    ],
    // Add any additional rules or overrides here
    rules: {
      'no-sequences': 'off',  // Disable the no-sequences rule
      'no-restricted-globals': ['error', 'window'],  // Only allow the 'window' global
    },
  };
  