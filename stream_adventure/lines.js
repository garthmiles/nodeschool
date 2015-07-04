// load & set req'd modules
var thru = require('through2')
var split = require('split')
var i = 1

// transform functions for buffers
var tStream = thru(function (bffr, enc, next) {
	// produce output data and proceed to next chunk
	if (i % 2 === 0) {
		this.push(bffr.toString().toUpperCase() + '\n')
	} else {
		this.push(bffr.toString().toLowerCase() + '\n')
	}
	i ++
	next()
})

process.stdin
	.pipe(split())
	.pipe(tStream)
	.pipe(process.stdout)



