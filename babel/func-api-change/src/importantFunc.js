/**
 *  personData: {
 * name: string,
 * age: number|string,
 * location: string
 * }
 */
module.exports = function importantFunc(personData) {
  console.log('im important!', personData)
}

//old version 
//this is the api we have sprinkled throughout our codebase
/* function importantFunc(name, location, age) {



} */