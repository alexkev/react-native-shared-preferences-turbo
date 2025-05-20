const path = require('path');
const { getDefaultConfig } = require('@react-native/metro-config');

// Replace the require with a dynamic import setup
let withMetroConfigPromise;

// Set up the root path
const root = path.resolve(__dirname, '..');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = getDefaultConfig(__dirname);

// Export a function that returns a promise resolving to the config
module.exports = async () => {
  // Dynamically import the ES module
  if (!withMetroConfigPromise) {
    withMetroConfigPromise = import('react-native-monorepo-config').then(
      ({ withMetroConfig }) => {
        return withMetroConfig(config, {
          root,
          dirname: __dirname,
        });
      }
    );
  }

  return withMetroConfigPromise;
};
