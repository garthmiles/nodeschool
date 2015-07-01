// load & set req'd modules
var through = require('through2') 
var stream = through(write, end) 

// transform functions for buffers
function write(buffer, encoding, next) {
	// produce output data and proceed to next chunk
	this.push(buffer + '\n')
	next()
}

function end(done) {
	// to be replaced with stuff
}


