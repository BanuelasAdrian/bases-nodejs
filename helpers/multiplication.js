const colors = require('colors');
const fs = require('fs');


const createTableFile = async (base = 1, list, limit = 10) => {
    
    try {
        console.log('======================'.yellow);
        console.log(`      Table of ${base}`.green,);
        console.log('======================'.yellow);
    
        let exit = '';
        let exitConsole = '';
    
        // Create the multiplication table
        for(let i = 1; i <= limit; i++) {
            exit += `${base} x ${i} = ${ base * i}\n`;
            exitConsole += `${colors.blue(base)} x ${colors.blue(i)} ${colors.yellow('=')} ${ base * i}\n`;
        }
    
        if(list) console.log(exitConsole);
    
        // Write the table in a file 
        await fs.writeFileSync(`./exit/table-${base}.txt`, exit);
    
        return `table-${base}.txt`;
    } catch (error) {
        throw `Cannot write in this folder`;
    }
}

module.exports = {
    createTableFile
}