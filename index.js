require('colors');
const argv = require('./config/yargs');
const {createTableFile} = require('./helpers/multiplication');

console.clear();

// Create the multiplicate table
createTableFile(argv.b, argv.l, argv.li)
    .then( fileName => console.log(fileName, 'created'.green))
    .catch(err => console.log(err.red));