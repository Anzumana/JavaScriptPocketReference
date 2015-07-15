// range.js: A class representing a range of values.

// This is a factory function taht returns a new range object.
function range(from, to) {
	// Use Object.create() to create an object that inherits
	// from the prototype object defined below. The prototype
	// is stored as a property of this function, and defines
	// the shared methods (behavior) for all range objects.

	var r = Object.create(range.methods);
	// Save the start and end points (state) of the object.
	// They are noninherited properties unique to this object.
	r.from = from;
	r.to = to;

	// Finally return the new object
	return r;
}

// This prototype object defines methods inherited by all
// range.objects.
range.methods = {
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
var r = range(1,3); 	// Create a range object
r.includes(2);		// => true 2 is in the range
// bind console.log function to a variable
var myFunction = console.log.bind(console);
r.foreach(myFunction);	// Prints 1 2 3
console.log(r);		// Prints (1...3)
