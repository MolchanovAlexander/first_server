const path = require('path');

//console.log('log exit', path.join(__dirname, '..'))
//console.log('отримати абсолютний шлях', path.resolve('/__dirname', 'guf', 'noob'))
const fullPath = path.resolve('/__dirname', 'guf', 'noob.js');
console.log('parse шлях', path.parse(fullPath))



const siteURL = 'http://localhost:8080/users?id=5123'

const url = new URL(siteURL)
console.log(url)