// CommanJS. every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-name.js')
const sayHi = require('./5-utils')
const data = require('./6-alternative')
require('./7-mind-grenade')

sayHi("Deeksha")
sayHi(names.jitu)
sayHi(names.deepak)



// My experiment


// console.log(names)
// console.log(data)
// console.log(data.items)
// console.log(data.items[0])
// console.log(data.singlePerson)
// console.log(data.singlePerson.name)
