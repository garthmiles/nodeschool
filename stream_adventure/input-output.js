// load req'd modules 
var fs = require('fs')

// define variables
var host = process.stdin

// write to host
fs.createReadStream(host).pipe(process.stdout)


