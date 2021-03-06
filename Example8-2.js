"use strict"
// range.js: Another  class representing a range of values.

// This is a cosntructor function that initialized new
// Range objects. Note that it does not create or return
// the object. It just initialized this.
function Range(from, to) {
	// Store the start and end points (state) of this new
	// range object. These are noninherited properties that
	// are uniqute to this object.

	this.from = from;
	this.to = to;

}

// All Range objects inherit from this object.
// Note that the property name must be "prototype".
Range.prototype = {
	// Return true if x is in the range, false otherwse
	includes: function(x) {
		return this.from <= x && x <= this.to;
	},
	// Invoke f once for each integer in the range.
	// This method works only for numeric ranges.
	foreach: function(f) {
		for(var x=Math.ceil(this.from); x<= this.to; x++)
			f(x);
	},
	// Return a string representation of the range
	toString: function() {
		return "(" + this.from + "..." + this.to + ")";
	}
};

//Here are example used of a range object.
var r = new Range(1,3); // Create a range object
console.log(r);		// Prints (1...3)
r.includes(2);		// => true 2 is in the range
// bind console.log function to a variable
var myFunction = console.log.bind(console);
r.foreach(myFunction);	// Prints 1 2 3
console.log(r);		// Prints (1...3)
