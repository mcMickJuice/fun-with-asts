const request = require('./request')

module.exports = function iDoNothing() {
  //just references expensiveOperation, doesn't call it
  //therefore this won't be modified
  request.expensiveOperation;

  const name = 'mike';
}