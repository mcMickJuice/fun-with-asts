const importantFunc = require('./importantFunc')

const name = 'larry';
const age = 'five months';
const location = 'his kennel';

module.exports = function doWork() {
  importantFunc(name, age, location);
}