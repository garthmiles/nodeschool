// load & set req'd modules
var through = require('through2') 

// transform functions for buffers
var tStream = through(function (buffer, encoding, next) {
	// produce output data and proceed to next chunk
	this.push(buffer.toString())
	next()
})

process.stdin.pipe(tStream).pipe(process.stdout)


