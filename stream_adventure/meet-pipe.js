// load req'd modules
var fs = require('fs')

// pipe contents to host
fs.createReadStream(process.argv[2]).pipe(process.stdout)