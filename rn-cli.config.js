// Solves a current bug in react native, leave here for now. Ill find the github issue and link later to keep track

const blacklist = require('./node_modules/metro/src/blacklist');

module.exports = {
  getBlacklistRE() {
    return blacklist([/react-native\/local-cli\/core\/__fixtures__.*/]);
  },
};
