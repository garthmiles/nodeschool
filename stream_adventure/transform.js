// load & set req'd modules
var thru = require('through2') 

// transform functions for buffers
var tStream = thru(function (bffr, enc, next) {
	// produce output data and proceed to next chunk
	this.push(bffr.toString())
	next()
})

process.stdin.pipe(tStream).pipe(process.stdout)


