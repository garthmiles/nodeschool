// load req'd modules
var fs = require('fs')

// pipe contents to host
fs.createReadStream(process.argv[2]).pipe(process.stdout)

/*
// reference solution
var fs = require('fs')
var file = process.argv[2]
fs.createReadStream(file).pipe(process.stdout)
*/
