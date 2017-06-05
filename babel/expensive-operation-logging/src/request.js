module.exports.expensiveOperation = function expensiveOperationImpl() {
  //lock up the thread
  while(i < 1000000) {
    const c = i;
    i++
  }
}