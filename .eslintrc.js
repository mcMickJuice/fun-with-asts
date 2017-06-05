module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "plugins": [
    //registers this npm package as plugin
    "eslint-plugin-local-rules"
  ],
  "rules": {
    //using eslint-plugin-local-rules plugin, we tell
    //eslint to use our local-rule. See eslint-local-rules.js
    //in project root to see where this local rule is registered
    "local-rules/angular-no-scope": 2,
  }
};