module.exports.expensiveOperation = function expensiveOperationImpl() {
  //lock up the thread
  let i = 0;
  while(i < 1000000000) {
    const c = i;
    i++
  }
}