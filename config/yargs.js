require('colors');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Pass the base form the table'.yellow
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        demandOption: false,
        describe: 'Print the multiplicate table'.yellow
    })
    .option('li', {
        alias: 'limit',
        type: 'number',
        demandOption: false,
        description: 'The limit of our table'.yellow
    })
    .check((argv, options) => {
        if(isNaN(argv.b)) {
            throw `The base need to be number`.red;
        }
        return true;
    })
    .argv;

module.exports = argv;